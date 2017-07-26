const p = require('path')

/**
 * Get pack the higher available path to avoid unwanted behaviors
 * @param string root
 * @param string path - the path we want to go to
 * @return string - the higher path \o/
 */
function higherPath(root, path) {
  root = p.resolve(root)
  path = p.resolve(root, p.normalize(path) || './')

  if(path.length < root.length || path.indexOf(root) == -1) {
    path = root
  }

  return path
}

module.exports = higherPath
