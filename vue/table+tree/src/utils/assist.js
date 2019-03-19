function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  }
  return map[toString.call(obj)]
}

function deepCopy(data) {
  const t = typeOf(data)
  let o 
  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }
  if (t === 'array') {
    data.forEach(item => {
      o.push(deepCopy(item))
    });
  } else if ( t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o
}
/**
 * 向上找到最近的指定组件
 * @param {Objec} context 当前上下文
 * @param {String} componentName 组件名字
 */
function findComponentUpward (context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

/**
 * 向上找到所有的指定组件
 * @param {Objec} context 当前上下文
 * @param {String} componentName 组件名字
 */
function findComponentsUpward (context, componentName) {
  let parents = []
  const parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) {
      parents.push(parent)
    }
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}
/**
 * 向下找到最近的指定文件
 */
function findComponentDownward (context, componentName) {
  const childrens = context.$children
  let children = null
  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}
/**
 * 向下找到所有指定的组件
 */
function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}
/**
 * 找到指定组件的兄弟组件
 */
function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res 
}

export { 
  deepCopy,
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findBrothersComponents
}