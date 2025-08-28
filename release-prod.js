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

// Run npm version minor for core and dashboard, then update dependency
async function runRelease() {
  try {
    console.log('Running npm version minor for core...')

    // Run npm version minor for core with better error handling
    const { stdout: coreStdout, stderr: coreStderr } = await execAsync(
      'cd packages/core && npm version minor'
    )

    if (coreStderr && !coreStderr.includes('npm notice')) {
      console.error('npm version minor core stderr:', coreStderr)
    }

    console.log('npm version minor core output:', coreStdout)
    console.log('npm version minor core completed successfully.')

    // Wait a moment to ensure the file has been updated
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Running npm version minor for dashboard...')

    // Run npm version minor for dashboard
    const { stdout: dashboardStdout, stderr: dashboardStderr } = await execAsync(
      'cd packages/dashboard && npm version minor'
    )

    if (dashboardStderr && !dashboardStderr.includes('npm notice')) {
      console.error('npm version minor dashboard stderr:', dashboardStderr)
    }

    console.log('npm version minor dashboard output:', dashboardStdout)
    console.log('npm version minor dashboard completed successfully.')

    // Wait a moment to ensure the file has been updated
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Now read the updated package.json
    updateDependency('@orchidui/core')
  } catch (error) {
    console.error('Error during release process:', error.message)

    // If npm version minor fails, try to read the current version
    console.log('Trying to read current version...')
    updateDependency('@orchidui/core')
  }
}

runRelease()
