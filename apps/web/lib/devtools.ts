/**
 * This module initializes and manages a debug console (VConsole) based on URL parameters and localStorage.
 * It allows enabling/disabling the debug mode via URL and persists the setting in localStorage.
 * The debug console is only initialized when debug mode is active.
 */

import VConsole from 'vconsole'

function getQueryParam(name: string) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

// Read 'debug' parameter from URL, defaulting to 'false' if not present
const debugQueryParam = getQueryParam('debug') === 'true'

// Store the debug value in localStorage
localStorage.setItem('debug', debugQueryParam.toString())

// Retrieve the debug value from localStorage
const debugLocalStorage = localStorage.getItem('debug') === 'true'

// Initialize VConsole if debug is enabled
let vconsole: VConsole | undefined

if (debugLocalStorage) {
  vconsole = new VConsole({ theme: 'dark' })
  console.info('vconsole initialized', vconsole)
}

export { vconsole }
