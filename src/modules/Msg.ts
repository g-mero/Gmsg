import styles from '../message.module.scss'
import { Gmsg as GmsgType } from './Gmsg'
import { noticeMoveIn, noticeState, noticeThings } from './Notice'
import { Setting, UserSetting, getDefaultConf, assignConfig, ICONS } from './utils'

const DEFAULTS = getDefaultConf()

/**
 * 状态 & 动画
 * 显示中，显示完成，关闭中
 */
const STATES = new Map([
  ['opening', styles['message-movein']],
  ['done', ''],
  ['closing', styles['message-moveout']],
])

/**
 * 单个msg实例类
 */
export class Msg {
  // 当前msg的配置
  settings: Setting

  // 存储在map中的key
  id: number

  timeout: number

  private timer: undefined | NodeJS.Timer

  private $elem: HTMLDivElement

  state: string

  count: number

  private Gmsg: GmsgType

  constructor(Gmsg: GmsgType, opts: UserSetting) {
    this.Gmsg = Gmsg
    this.settings = assignConfig(DEFAULTS, opts)
    this.id = Gmsg.instCount
    this.count = 1
    this.state = ''
    const { timeout } = this.settings
    this.timeout = timeout
    this.settings.timeout = timeout
    this.timer = undefined
    let $elem: HTMLDivElement
    if (Gmsg.form === 'msg') {
      $elem = document.createElement('div')
      const $svg = ICONS.get(this.settings.type || 'info')
      const contentClassName = this.settings.showClose ? ` ${styles['gmsg-content-with-close']}` : ''
      const content = this.settings.content || ''
      const $closeSvg = ICONS.get('close')
      const $closeIcon = this.settings.showClose ? `<i class="${styles['gmsg-icon']} ${styles['gmsg-icon-close']}">${$closeSvg}</i>` : ''
      const $span = document.createElement('span')
      if (this.settings.html) {
        $span.innerHTML = content
      } else {
        $span.innerText = content
      }
      $elem.innerHTML = `<div class="${styles['gmsg-main']}">
      <div class="${styles['gmsg-content']} ${contentClassName}">\
          <i class="${styles['gmsg-icon']}">${$svg}</i>${$span.outerHTML}${$closeIcon}</div>\
      </div>`

      $elem.classList.add(styles['gmsg-item'])
      let $wrapper = document.querySelector(`.${styles['gmsg-wrapper-center']}`)
      if (!$wrapper) {
        $wrapper = document.createElement('div')
        $wrapper.classList.add(styles.gmsg, styles['gmsg-wrapper'], 'gmsg-is-initialized', styles['gmsg-wrapper-center'])
        document.body.appendChild($wrapper)
      }
      $wrapper.appendChild($elem)
    } else {
      $elem = noticeThings({ ...this.settings })
    }
    this.$elem = $elem
    // 打开动画
    if (Gmsg.form === 'notice') {
      noticeMoveIn(this.$elem)
    } else {
      this.setState('opening')
    }

    if (this.settings.showClose) {
      const $closeBtn = $elem.querySelector(`.${styles['gmsg-icon-close']}`)
      // 关闭按钮绑定点击事件
      if ($closeBtn !== null) {
        $closeBtn.addEventListener('click', () => {
          this.close()
        })
      }
    }

    // 关闭
    $elem.addEventListener('animationend', (e) => {
      // 监听动画完成
      const { target } = e
      const { animationName } = e
      const states = Gmsg.form === 'notice' ? noticeState : STATES
      if (animationName === states.get('closing')) {
        clearInterval(this.timer)
        this.destroy()
      }
      const $targ = target as HTMLElement
      $targ.style.animationName = ''
    })
    if (this.settings.autoClose) {
      // 自动关闭
      const intvMs = 10 // 定时器频率
      this.timer = setInterval(() => {
        this.timeout -= intvMs
        if (this.timeout <= 0) {
          clearInterval(this.timer)
          this.close()
        }
      }, intvMs)
      this.$elem.addEventListener('mouseover', () => {
        clearInterval(this.timer)
      })
      this.$elem.addEventListener('mouseout', () => {
        if (this.state !== 'closing') {
          // 状态为关闭则不重启定时器
          this.timer = setInterval(() => {
            this.timeout -= intvMs
            if (this.timeout <= 0) {
              clearInterval(this.timer)
              this.close()
            }
          }, intvMs)
        }
      })
    }
  }

  // 设置状态，主要是为了控制动画
  private setState(state: string) {
    const statename = this.Gmsg.form === 'notice' ? noticeState.get(state) : STATES.get(state)
    if (statename === undefined) return
    this.state = state
    this.$elem.style.animationName = statename
  }

  /**
   * 设置消息数量统计
   *
   */
  setMsgCount() {
    const countClassName = styles['gmsg-count']
    let $count = this.$elem.querySelector(`.${countClassName}`) as HTMLElement
    if (!$count) {
      $count = document.createElement('span')
      $count.classList.add(countClassName)
      this.$elem.appendChild($count)
    }
    $count.innerHTML = this.count.toString()
    $count.style.animationName = ''
    $count.style.animationName = styles['message-shake']
    this.timeout = this.settings.timeout || DEFAULTS.timeout
  }

  /**
   * 直接销毁元素，不会触发关闭回调函数
   */
  destroy() {
    if (this.$elem.parentNode) this.$elem.parentNode.removeChild(this.$elem)
    clearInterval(this.timer)
    this.Gmsg.remove(this.id)
  }

  close() {
    this.$elem.classList.add(styles.closing)
    // 这里设置maxheight使得关闭打开效果更加平滑
    this.$elem.style.maxHeight = `${this.$elem.offsetHeight + 10}px`
    this.setState('closing')
    this.Gmsg.remove(this.id)
    const callback = this.settings.onClose
    if (callback && callback instanceof Function) {
      callback.call(this)
    }
  }
}
