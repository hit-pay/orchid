import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function runCommands() {
  await execPromise('cd packages/core && npm version patch')
  await sleep(1000) // delay 1 detik
  await execPromise('cd packages/dashboard && npm version patch')
  
  // Pindahkan operasi JSON ke sini
  const fs = require('fs')
  const packageJsonPathCore = './packages/core/package.json'
  const packageJsonPathDashboard = './packages/dashboard/package.json'

  // Function to update a dependency version
  function updateDependency(dependencyName) {
    // Read the package.json file
    const packageJsonDashboard = JSON.parse(fs.readFileSync(packageJsonPathDashboard, 'utf-8'))
    const packageJsonCore = JSON.parse(fs.readFileSync(packageJsonPathCore, 'utf-8'))
    // Check and update in dependencies
    if (packageJsonDashboard.dependencies && packageJsonDashboard.dependencies[dependencyName]) {
      packageJsonDashboard.dependencies[dependencyName] = packageJsonCore.version
      console.log(`Updated ${dependencyName} to version ${packageJsonCore.version} in dependencies.`)
    }
    // Write the updated package.json file back
    fs.writeFileSync(packageJsonPathDashboard, JSON.stringify(packageJsonDashboard, null, 2), 'utf-8')
    console.log('package.json updated successfully.')
  }

  updateDependency('@orchidui/core')
}

runCommands()