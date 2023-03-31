/* eslint-disable no-param-reassign */
import styles from '../message.module.scss'

export interface UserSetting {
  type?: string
  showClose?: boolean
  timeout?: number
  autoClose?: boolean
  content?: string
  onClose?: (() => void) | null
  maxNums?: number
  html?: boolean
  title?: string
}

// 单个msg的实例设置项
export interface Setting {
  type: string
  showClose: boolean
  timeout: number
  autoClose: boolean
  content: string
  onClose: (() => void) | null
  maxNums: number
  html: boolean
}

// 浅拷贝
export function copyConfig(mainConfig: Setting) {
  const tmp = { ...mainConfig }
  return tmp
}

export function assignConfig(mainConfig: Setting, userConfig: UserSetting) {
  return Object.assign(copyConfig(mainConfig), userConfig)
}

/**
 * 全局默认配置
 * 可在引入js之前通过Gmsg_GLOBALS.DEFAULTS进行配置
 * type {String} 类型，支持'info','warning','success','error','loading'
 * showClose {Boolean} 是否显示关闭图标，默认为false不显示
 * timeout {Number} 多久后自动关闭，单位ms,默认2500
 * autoClose {Boolean} 是否自动关闭，默认true,注意在type为loading的时候自动关闭为false
 * content {String} 提示的内容
 * onClose {Function} 关闭的回调函数
 */
const DEFAULTS: Setting = {
  type: 'info',
  showClose: false,
  timeout: 2500,
  autoClose: true,
  content: '',
  onClose: null,
  maxNums: 5,
  html: false,
}

export function getDefaultConf() {
  return copyConfig(DEFAULTS)
}

/**
 * 设置icon html代码
 */
export const ICONS = new Map([
  [
    'info',
    `<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 
    13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 
    41.7614 18.4772 44 24 44Z" fill="#1890ff" stroke="#1890ff" stroke-width="4" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 
    12.1193 22.6193 11 24 11Z" fill="#FFF"/><path d="M24.5 34V20H23.5H22.5" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 34H28" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ],
  [
    'warning',
    `<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/>
    <path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 
    4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" 
    fill="#faad14" stroke="#faad14" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 
    34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#FFF"/><path d="M24 12V28" stroke="#FFF" stroke-width="4" 
    stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ],
  [
    'error',
    '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#f5222d" stroke="#f5222d" stroke-width="4" stroke-linejoin="round"/><path d="M29.6569 18.3431L18.3432 29.6568" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3432 18.3431L29.6569 29.6568" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ],
  [
    'success',
    '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z" fill="#52c41a" stroke="#52c41a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 24L22 29L32 19" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ],
  [
    'loading',
    `<svg class="${styles['animate-turn']}" width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ],
  [
    'close',
    '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ],
])

export function warpByDiv(...el: HTMLElement[]) {
  const $tmp = document.createElement('div')
  $tmp.append(...el)

  return $tmp
}

export function slideOpenEl(el: HTMLElement, duration: string) {
  const { marginBottom } = el.style
  el.style.marginBottom = '0'
  el.style.opacity = '0'
  const height = el.offsetHeight
  const maxHeight = height + 10

  el.style.transition = `all ${duration}`

  el.style.maxHeight = '0'

  setTimeout(() => {
    el.style.maxHeight = `${maxHeight}px`
    el.style.marginBottom = marginBottom
  }, 10)
}
