import styles from '../message.module.scss'
import { ICONS, slideOpenEl } from './utils'

export const noticeState = new Map([
  ['opening', styles['notice-movein']],
  ['done', ''],
  ['closing', styles['notice-moveout']],
])

export function noticeMoveIn(noticeEl: HTMLElement) {
  slideOpenEl(noticeEl, '.1s')
  setTimeout(() => {
    // eslint-disable-next-line no-param-reassign
    noticeEl.style.opacity = '1'
    // eslint-disable-next-line no-param-reassign
    noticeEl.style.animationName = noticeState.get('opening') || ''
  }, 100)
}

export function noticeThings(params: { type: string; content: string; html: boolean; title?: string; iread?: () => void; meta?: string }) {
  const { iread } = params
  const meta = params.meta === undefined ? '' : params.meta

  let $wrapper = document.querySelector(`.${styles['gmsg-wrapper-top-right']}`)

  let $scrollContainer = null
  if ($wrapper !== null) $scrollContainer = $wrapper.querySelector(`.${styles['scroll-content']}`)

  if (!$wrapper || !$scrollContainer) {
    $wrapper = document.createElement('div')
    $wrapper.classList.add(styles.gmsg, styles['gmsg-wrapper'], 'gmsg-is-initialized', styles['gmsg-wrapper-top-right'])
    document.body.appendChild($wrapper)
    const $scrollWrapper = document.createElement('div')
    $scrollWrapper.classList.add(styles['scroll-wrapper'])
    $scrollContainer = document.createElement('div')
    $scrollContainer.classList.add(styles['scroll-content'])
    $scrollWrapper.append($scrollContainer)
    $wrapper.append($scrollWrapper)
  }

  const $elem = document.createElement('div')
  const $svg = ICONS.get(params.type || 'info')
  const $closeSvg = ICONS.get('close')
  const $closeIcon = `<i class="${styles['gmsg-icon']} ${styles['gmsg-icon-close']} ${styles['gmsg-notice-close']}">${$closeSvg}</i>`
  let $footer = ''

  if (meta || iread !== undefined) {
    $footer = `<div class="${styles['gmsg-notice-footer']}">\
      <span class="${styles['gmsg-notice-meta']}" >${meta}</span>\
      ${iread ? `<span class = "${styles['gmsg-notice-iread']}">已读</span>` : ''}
    </div>`
  }
  if (!params.title) {
    $elem.innerHTML = `<div class="${styles['gmsg-notice-main']} ${styles['gmsg-content']}">\
    <i class="${styles['gmsg-icon']} ${styles['gmsg-notice-icon']}">${$svg}</i>${$closeIcon}
    <div class="${styles['gmsg-notice-header']}">${params.content}</div>\
    ${$footer}\
    </div>`
  } else {
    let contentClassName = styles['gmsg-notice-content']
    contentClassName += ` ${styles['gmsg-content-with-close']}`
    const content = params.content || ''
    const $span = document.createElement('span')
    if (params.html) {
      $span.innerHTML = content
    } else {
      $span.innerText = content
    }
    $elem.innerHTML = `<div class="${styles['gmsg-notice-main']} ${styles['gmsg-content']}">\
  <i class="${styles['gmsg-icon']} ${styles['gmsg-notice-icon']}">${$svg}</i>${$closeIcon}
  <div class="${styles['gmsg-notice-header']}">${params.title}</div>
           <div class="${contentClassName}">\
               ${$span.outerHTML}</div>\
               ${$footer}
       </div>`
  }

  if (iread !== undefined) {
    const $btnIread = $elem.querySelector(`.${styles['gmsg-notice-iread']}`)

    if ($btnIread !== null) {
      $btnIread.addEventListener('click', () => {
        iread()
      })
    }
  }

  $elem.classList.add(styles['gmsg-notice-item'])

  $scrollContainer.prepend($elem)

  return $elem
}
