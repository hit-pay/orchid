import { exec } from 'child_process'
exec('cd packages/core && npm version prerelease')
exec('cd packages/dashboard && npm version prerelease')

const fs = require('fs')
const packageJsonPath = './packages/dashboard/package.json'

// Function to update a dependency version
function updateDependency(dependencyName, newVersion) {
  // Read the package.json file
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  // Check and update in dependencies
  if (packageJson.dependencies && packageJson.dependencies[dependencyName]) {
    packageJson.dependencies[dependencyName] = newVersion
    console.log(`Updated ${dependencyName} to version ${newVersion} in dependencies.`)
  }
  // Write the updated package.json file back
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8')
  console.log('package.json updated successfully.')
}

updateDependency('@orchidui/core', 'dev')
