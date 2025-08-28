import { exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'

const execAsync = promisify(exec)
const packageJsonPath = './packages/dashboard/package.json'

// Function to update a dependency version
function updateDependency(dependencyName) {
  try {
    // Read the package.json file
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
    const corePackageJson = JSON.parse(fs.readFileSync('./packages/core/package.json', 'utf-8'))
    const newVersion = corePackageJson.version
    console.log(`Current core version: ${newVersion}`)

    // Check and update in dependencies
    if (packageJson.dependencies && packageJson.dependencies[dependencyName]) {
      packageJson.version = newVersion
      packageJson.dependencies[dependencyName] = newVersion
      console.log(`Updated ${dependencyName} to version ${newVersion} in dependencies.`)
    }
    // Write the updated package.json file back
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8')
    console.log('package.json updated successfully.')
  } catch (error) {
    console.error('Error updating dependency:', error)
  }
}

// Jalankan npm version prerelease terlebih dahulu, kemudian update dependency
async function runRelease() {
  try {
    console.log('Running npm version prerelease...')

    // Jalankan npm version prerelease dengan error handling yang lebih baik
    const { stdout, stderr } = await execAsync('cd packages/core && npm version prerelease')

    if (stderr && !stderr.includes('npm notice')) {
      console.error('npm version prerelease stderr:', stderr)
    }

    console.log('npm version prerelease output:', stdout)
    console.log('npm version prerelease completed successfully.')

    // Tunggu sebentar untuk memastikan file sudah terupdate
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Sekarang baca package.json yang sudah diupdate
    updateDependency('@orchidui/core')
  } catch (error) {
    console.error('Error during release process:', error.message)

    // Jika npm version prerelease gagal, coba baca versi yang ada
    console.log('Trying to read current version...')
    updateDependency('@orchidui/core')
  }
}

runRelease()
