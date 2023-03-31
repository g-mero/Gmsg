var Gmsg = (function (exports) {
  'use strict';

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "@charset \"UTF-8\";\n.gmsg___Wdczg {\n  word-wrap: break-word;\n}\n.gmsg___Wdczg.gmsg-wrapper___BedSj {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.55);\n  font-size: 13px;\n  font-variant: tabular-nums;\n  line-height: 1.2;\n  list-style: none;\n  font-feature-settings: \"tnum\";\n  position: fixed;\n  left: 0;\n  right: 0;\n  height: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n  z-index: 9999;\n}\n.gmsg___Wdczg.gmsg-wrapper___BedSj .scroll-wrapper___nd-l- {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 100vh;\n  position: absolute;\n  padding: 1rem 1rem 33px 50px;\n  scroll-behavior: smooth;\n  /* 浏览器的scrollbar */\n}\n.gmsg___Wdczg.gmsg-wrapper___BedSj .scroll-wrapper___nd-l- .scroll-content___6Flb- {\n  padding-bottom: 3rem;\n}\n.gmsg___Wdczg.gmsg-wrapper___BedSj .scroll-wrapper___nd-l-::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  display: none;\n}\n.gmsg___Wdczg.gmsg-wrapper___BedSj.gmsg-wrapper-top-right___9vf8x {\n  top: 0;\n  align-items: flex-end;\n}\n.gmsg___Wdczg.gmsg-wrapper___BedSj.gmsg-wrapper-center___9nTOa {\n  top: calc(50% - 2rem);\n  align-items: center;\n}\n.gmsg___Wdczg .gmsg-item___LC4bz {\n  margin-bottom: 0.4rem;\n  border-radius: 4px;\n  text-align: center;\n  animation-duration: 0.3s;\n  position: relative;\n  max-width: 20rem;\n  min-width: 3rem;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  /* 从中间开始放大 */\n  transform-origin: center;\n}\n.gmsg___Wdczg .gmsg-item___LC4bz .gmsg-main___YPRIz {\n  padding: 8px 16px;\n}\n.gmsg___Wdczg .gmsg-count___0nmTY {\n  text-align: center;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  background-color: red;\n  color: #fff;\n  font-size: 12px;\n  line-height: 16px;\n  border-radius: 2px;\n  display: inline-block;\n  min-width: 16px;\n  height: 16px;\n  animation-duration: 0.3s;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx {\n  margin-bottom: 1rem;\n  border-radius: 4px;\n  text-align: center;\n  animation-duration: 0.25s;\n  position: relative;\n  width: 20rem;\n  transform-origin: top center;\n  background: #fff;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx.closing___-gUpH {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: default;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx .gmsg-notice-main___DjWOD {\n  display: flex;\n  align-items: normal;\n  flex-direction: column;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx .gmsg-notice-main___DjWOD .gmsg-notice-header___sd-aL {\n  font-size: 1.1rem;\n  color: black;\n  margin-left: 3.5rem;\n  padding-right: 3rem;\n  margin-top: 0.8rem;\n  margin-bottom: 1rem;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx .gmsg-notice-main___DjWOD .gmsg-notice-content___kO1ZG {\n  position: relative;\n  margin-left: 2rem;\n  margin-bottom: 1rem;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx .gmsg-notice-main___DjWOD .gmsg-notice-footer___A5CQB {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  padding-bottom: 0.6rem;\n  padding-top: 0;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx .gmsg-notice-main___DjWOD .gmsg-notice-footer___A5CQB .gmsg-notice-meta___Rphj2 {\n  color: rgba(0, 0, 0, 0.35);\n  font-size: 0.7rem;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx .gmsg-notice-main___DjWOD .gmsg-notice-footer___A5CQB .gmsg-notice-iread___rL7Ls {\n  color: #A9DD4E;\n  cursor: pointer;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx .gmsg-notice-main___DjWOD .gmsg-notice-icon___areDx {\n  font-size: 1.8rem;\n  position: absolute;\n  top: 0.7rem;\n  left: 1rem;\n}\n.gmsg___Wdczg .gmsg-notice-item___NCVgx .gmsg-notice-main___DjWOD .gmsg-notice-close___f37lc {\n  font-size: 1.6rem;\n  position: absolute;\n  top: 0.7rem;\n  right: 0.3rem;\n}\n.gmsg___Wdczg .gmsg-content___Qo40W {\n  text-align: left;\n  position: relative;\n  display: flex;\n  pointer-events: all;\n  align-items: flex-start;\n  /* 解决字体模糊抖动问题 */\n  transform: perspective(1px);\n}\n.gmsg___Wdczg .gmsg-content___Qo40W .gmsg-content-with-close___Hi-Tz {\n  padding-right: 20px;\n}\n.gmsg___Wdczg .gmsg-icon___ppys2 {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  top: 1px;\n  margin-right: 8px;\n  font-size: 16px;\n}\n.gmsg___Wdczg .gmsg-icon___ppys2 svg {\n  display: inline-block;\n}\n.gmsg___Wdczg .gmsg-content-info___Agfr0 .gmsg-icon___ppys2 {\n  color: #1890ff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.gmsg___Wdczg .gmsg-icon-close___6PwlA {\n  position: absolute;\n  margin: 0;\n  top: 2px;\n  right: 0;\n  padding: 0;\n  overflow: hidden;\n  font-size: 1rem;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.45);\n  transition: color 0.3s;\n}\n.gmsg___Wdczg .gmsg-icon-close___6PwlA:hover > svg path {\n  stroke: #555;\n}\n.gmsg___Wdczg .animate-turn___yayAU {\n  animation: message-turn___JWhT3 1s linear infinite;\n}\n\n/* loading的转动 */\n@keyframes message-turn___JWhT3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes message-moveout___InTXF {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.7);\n    max-height: 0;\n    opacity: 0;\n    margin-bottom: 0;\n  }\n}\n@keyframes message-movein___2w-JC {\n  0% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/* svg抖动 */\n@keyframes message-shake___Xx78F {\n  0%, 100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  25%, 75% {\n    transform: translateX(-4px);\n    opacity: 0.75;\n  }\n  50% {\n    transform: translateX(4px);\n    opacity: 0.25;\n  }\n}\n/* notice进入 */\n@keyframes notice-movein___QALbF {\n  0% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/* notice退出 */\n@keyframes notice-moveout___zgcZ5 {\n  0% {\n    opacity: 1;\n  }\n  40% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    max-height: 0;\n    opacity: 0;\n    margin: 0;\n  }\n}";
  var styles = {"gmsg":"gmsg___Wdczg","gmsg-wrapper":"gmsg-wrapper___BedSj","scroll-wrapper":"scroll-wrapper___nd-l-","scroll-content":"scroll-content___6Flb-","gmsg-wrapper-top-right":"gmsg-wrapper-top-right___9vf8x","gmsg-wrapper-center":"gmsg-wrapper-center___9nTOa","gmsg-item":"gmsg-item___LC4bz","gmsg-main":"gmsg-main___YPRIz","gmsg-count":"gmsg-count___0nmTY","gmsg-notice-item":"gmsg-notice-item___NCVgx","closing":"closing___-gUpH","gmsg-notice-main":"gmsg-notice-main___DjWOD","gmsg-notice-header":"gmsg-notice-header___sd-aL","gmsg-notice-content":"gmsg-notice-content___kO1ZG","gmsg-notice-footer":"gmsg-notice-footer___A5CQB","gmsg-notice-meta":"gmsg-notice-meta___Rphj2","gmsg-notice-iread":"gmsg-notice-iread___rL7Ls","gmsg-notice-icon":"gmsg-notice-icon___areDx","gmsg-notice-close":"gmsg-notice-close___f37lc","gmsg-content":"gmsg-content___Qo40W","gmsg-content-with-close":"gmsg-content-with-close___Hi-Tz","gmsg-icon":"gmsg-icon___ppys2","gmsg-content-info":"gmsg-content-info___Agfr0","gmsg-icon-close":"gmsg-icon-close___6PwlA","animate-turn":"animate-turn___yayAU","message-turn":"message-turn___JWhT3","message-moveout":"message-moveout___InTXF","message-movein":"message-movein___2w-JC","message-shake":"message-shake___Xx78F","notice-movein":"notice-movein___QALbF","notice-moveout":"notice-moveout___zgcZ5"};
  styleInject(css_248z);

  /* eslint-disable no-param-reassign */
  // 浅拷贝
  function copyConfig(mainConfig) {
    const tmp = {
      ...mainConfig
    };
    return tmp;
  }
  function assignConfig(mainConfig, userConfig) {
    return Object.assign(copyConfig(mainConfig), userConfig);
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
  const DEFAULTS$1 = {
    type: 'info',
    showClose: false,
    timeout: 2500,
    autoClose: true,
    content: '',
    onClose: null,
    maxNums: 5,
    html: false
  };
  function getDefaultConf() {
    return copyConfig(DEFAULTS$1);
  }

  /**
   * 设置icon html代码
   */
  const ICONS = new Map([['info', `<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 
    13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 
    41.7614 18.4772 44 24 44Z" fill="#1890ff" stroke="#1890ff" stroke-width="4" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 
    12.1193 22.6193 11 24 11Z" fill="#FFF"/><path d="M24.5 34V20H23.5H22.5" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 34H28" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`], ['warning', `<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/>
    <path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 
    4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" 
    fill="#faad14" stroke="#faad14" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 
    34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#FFF"/><path d="M24 12V28" stroke="#FFF" stroke-width="4" 
    stroke-linecap="round" stroke-linejoin="round"/></svg>`], ['error', '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#f5222d" stroke="#f5222d" stroke-width="4" stroke-linejoin="round"/><path d="M29.6569 18.3431L18.3432 29.6568" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3432 18.3431L29.6569 29.6568" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'], ['success', '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z" fill="#52c41a" stroke="#52c41a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 24L22 29L32 19" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'], ['loading', `<svg class="${styles['animate-turn']}" width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`], ['close', '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>']]);
  function slideOpenEl(el, duration) {
    const {
      marginBottom
    } = el.style;
    el.style.marginBottom = '0';
    el.style.opacity = '0';
    const height = el.offsetHeight;
    const maxHeight = height + 10;
    el.style.transition = `all ${duration}`;
    el.style.maxHeight = '0';
    setTimeout(() => {
      el.style.maxHeight = `${maxHeight}px`;
      el.style.marginBottom = marginBottom;
    }, 10);
  }

  const noticeState = new Map([['opening', styles['notice-movein']], ['done', ''], ['closing', styles['notice-moveout']]]);
  function noticeMoveIn(noticeEl) {
    slideOpenEl(noticeEl, '.1s');
    setTimeout(() => {
      // eslint-disable-next-line no-param-reassign
      noticeEl.style.opacity = '1';
      // eslint-disable-next-line no-param-reassign
      noticeEl.style.animationName = noticeState.get('opening') || '';
    }, 100);
  }
  function noticeThings(params) {
    const {
      iread
    } = params;
    const meta = params.meta === undefined ? '' : params.meta;
    let $wrapper = document.querySelector(`.${styles['gmsg-wrapper-top-right']}`);
    let $scrollContainer = null;
    if ($wrapper !== null) $scrollContainer = $wrapper.querySelector(`.${styles['scroll-content']}`);
    if (!$wrapper || !$scrollContainer) {
      $wrapper = document.createElement('div');
      $wrapper.classList.add(styles.gmsg, styles['gmsg-wrapper'], 'gmsg-is-initialized', styles['gmsg-wrapper-top-right']);
      document.body.appendChild($wrapper);
      const $scrollWrapper = document.createElement('div');
      $scrollWrapper.classList.add(styles['scroll-wrapper']);
      $scrollContainer = document.createElement('div');
      $scrollContainer.classList.add(styles['scroll-content']);
      $scrollWrapper.append($scrollContainer);
      $wrapper.append($scrollWrapper);
    }
    const $elem = document.createElement('div');
    const $svg = ICONS.get(params.type || 'info');
    const $closeSvg = ICONS.get('close');
    const $closeIcon = `<i class="${styles['gmsg-icon']} ${styles['gmsg-icon-close']} ${styles['gmsg-notice-close']}">${$closeSvg}</i>`;
    let $footer = '';
    if (meta || iread !== undefined) {
      $footer = `<div class="${styles['gmsg-notice-footer']}">\
      <span class="${styles['gmsg-notice-meta']}" >${meta}</span>\
      ${iread ? `<span class = "${styles['gmsg-notice-iread']}">已读</span>` : ''}
    </div>`;
    }
    if (!params.title) {
      $elem.innerHTML = `<div class="${styles['gmsg-notice-main']} ${styles['gmsg-content']}">\
    <i class="${styles['gmsg-icon']} ${styles['gmsg-notice-icon']}">${$svg}</i>${$closeIcon}
    <div class="${styles['gmsg-notice-header']}">${params.content}</div>\
    ${$footer}\
    </div>`;
    } else {
      let contentClassName = styles['gmsg-notice-content'];
      contentClassName += ` ${styles['gmsg-content-with-close']}`;
      const content = params.content || '';
      const $span = document.createElement('span');
      if (params.html) {
        $span.innerHTML = content;
      } else {
        $span.innerText = content;
      }
      $elem.innerHTML = `<div class="${styles['gmsg-notice-main']} ${styles['gmsg-content']}">\
  <i class="${styles['gmsg-icon']} ${styles['gmsg-notice-icon']}">${$svg}</i>${$closeIcon}
  <div class="${styles['gmsg-notice-header']}">${params.title}</div>
           <div class="${contentClassName}">\
               ${$span.outerHTML}</div>\
               ${$footer}
       </div>`;
    }
    if (iread !== undefined) {
      const $btnIread = $elem.querySelector(`.${styles['gmsg-notice-iread']}`);
      if ($btnIread !== null) {
        $btnIread.addEventListener('click', () => {
          iread();
        });
      }
    }
    $elem.classList.add(styles['gmsg-notice-item']);
    $scrollContainer.prepend($elem);
    return $elem;
  }

  const DEFAULTS = getDefaultConf();

  /**
   * 状态 & 动画
   * 显示中，显示完成，关闭中
   */
  const STATES = new Map([['opening', styles['message-movein']], ['done', ''], ['closing', styles['message-moveout']]]);

  /**
   * 单个msg实例类
   */
  class Msg {
    // 当前msg的配置

    // 存储在map中的key

    constructor(Gmsg, opts) {
      this.Gmsg = Gmsg;
      this.settings = assignConfig(DEFAULTS, opts);
      this.id = Gmsg.instCount;
      this.count = 1;
      this.state = '';
      const {
        timeout
      } = this.settings;
      this.timeout = timeout;
      this.settings.timeout = timeout;
      this.timer = undefined;
      let $elem;
      if (Gmsg.form === 'msg') {
        $elem = document.createElement('div');
        const $svg = ICONS.get(this.settings.type || 'info');
        const contentClassName = this.settings.showClose ? ` ${styles['gmsg-content-with-close']}` : '';
        const content = this.settings.content || '';
        const $closeSvg = ICONS.get('close');
        const $closeIcon = this.settings.showClose ? `<i class="${styles['gmsg-icon']} ${styles['gmsg-icon-close']}">${$closeSvg}</i>` : '';
        const $span = document.createElement('span');
        if (this.settings.html) {
          $span.innerHTML = content;
        } else {
          $span.innerText = content;
        }
        $elem.innerHTML = `<div class="${styles['gmsg-main']}">
      <div class="${styles['gmsg-content']} ${contentClassName}">\
          <i class="${styles['gmsg-icon']}">${$svg}</i>${$span.outerHTML}${$closeIcon}</div>\
      </div>`;
        $elem.classList.add(styles['gmsg-item']);
        let $wrapper = document.querySelector(`.${styles['gmsg-wrapper-center']}`);
        if (!$wrapper) {
          $wrapper = document.createElement('div');
          $wrapper.classList.add(styles.gmsg, styles['gmsg-wrapper'], 'gmsg-is-initialized', styles['gmsg-wrapper-center']);
          document.body.appendChild($wrapper);
        }
        $wrapper.appendChild($elem);
      } else {
        $elem = noticeThings({
          ...this.settings
        });
      }
      this.$elem = $elem;
      // 打开动画
      if (Gmsg.form === 'notice') {
        noticeMoveIn(this.$elem);
      } else {
        this.setState('opening');
      }
      if (this.settings.showClose) {
        const $closeBtn = $elem.querySelector(`.${styles['gmsg-icon-close']}`);
        // 关闭按钮绑定点击事件
        if ($closeBtn !== null) {
          $closeBtn.addEventListener('click', () => {
            this.close();
          });
        }
      }

      // 关闭
      $elem.addEventListener('animationend', e => {
        // 监听动画完成
        const {
          target
        } = e;
        const {
          animationName
        } = e;
        const states = Gmsg.form === 'notice' ? noticeState : STATES;
        if (animationName === states.get('closing')) {
          clearInterval(this.timer);
          this.destroy();
        }
        const $targ = target;
        $targ.style.animationName = '';
      });
      if (this.settings.autoClose) {
        // 自动关闭
        const intvMs = 10; // 定时器频率
        this.timer = setInterval(() => {
          this.timeout -= intvMs;
          if (this.timeout <= 0) {
            clearInterval(this.timer);
            this.close();
          }
        }, intvMs);
        this.$elem.addEventListener('mouseover', () => {
          clearInterval(this.timer);
        });
        this.$elem.addEventListener('mouseout', () => {
          if (this.state !== 'closing') {
            // 状态为关闭则不重启定时器
            this.timer = setInterval(() => {
              this.timeout -= intvMs;
              if (this.timeout <= 0) {
                clearInterval(this.timer);
                this.close();
              }
            }, intvMs);
          }
        });
      }
    }

    // 设置状态，主要是为了控制动画
    setState(state) {
      const statename = this.Gmsg.form === 'notice' ? noticeState.get(state) : STATES.get(state);
      if (statename === undefined) return;
      this.state = state;
      this.$elem.style.animationName = statename;
    }

    /**
     * 设置消息数量统计
     *
     */
    setMsgCount() {
      const countClassName = styles['gmsg-count'];
      let $count = this.$elem.querySelector(`.${countClassName}`);
      if (!$count) {
        $count = document.createElement('span');
        $count.classList.add(countClassName);
        this.$elem.appendChild($count);
      }
      $count.innerHTML = this.count.toString();
      $count.style.animationName = '';
      $count.style.animationName = styles['message-shake'];
      this.timeout = this.settings.timeout || DEFAULTS.timeout;
    }

    /**
     * 直接销毁元素，不会触发关闭回调函数
     */
    destroy() {
      if (this.$elem.parentNode) this.$elem.parentNode.removeChild(this.$elem);
      clearInterval(this.timer);
      this.Gmsg.remove(this.id);
    }
    close() {
      this.$elem.classList.add(styles.closing);
      // 这里设置maxheight使得关闭打开效果更加平滑
      this.$elem.style.maxHeight = `${this.$elem.offsetHeight + 10}px`;
      this.setState('closing');
      this.Gmsg.remove(this.id);
      const callback = this.settings.onClose;
      if (callback && callback instanceof Function) {
        callback.call(this);
      }
    }
  }

  /**
   * 通过配置信息 来判断是否为同一条消息,并返回消息实例
   * @param {Setting} params 配置项
   * @private
   */
  function judgeReMsg(params) {
    let oMsg;
    oMsg = undefined;
    const buildNewMsg = () => {
      const newMsg = new Msg(this, params);
      this.instCount += 1;
      newMsg.id = this.instCount;
      this.oMsgs.set(this.instCount, {
        inst: newMsg,
        config: JSON.stringify(params)
      });
      const len = this.oMsgs.size;
      const {
        maxNums
      } = this.setting;
      /**
       * 关闭多余的消息
       */
      if (len > maxNums) {
        let noClosed = true;
        this.oMsgs.forEach(v => {
          const tmp = v.inst;
          if (noClosed && tmp.settings.autoClose && tmp.id !== newMsg.id) {
            noClosed = false;
            tmp.close();
          }
        });
      }
      return newMsg;
    };
    this.oMsgs.forEach(v => {
      const oMsgItem = v;
      if (v.config === JSON.stringify(params)) {
        oMsg = oMsgItem.inst;
        oMsg.count = oMsg.count >= 99 ? oMsg.count : oMsg.count + 1;
        oMsg.setMsgCount();
      }
    });
    if (oMsg === undefined) {
      oMsg = buildNewMsg();
    }
    return oMsg;
  }
  // gmsg的容器类，存放实例以及配置信息。
  class Gmsg {
    // 存放当前容器的默认设置

    constructor(form) {
      this.version = "1.0.0";
      this.instCount = 0;
      this.oMsgs = new Map();
      this.setting = getDefaultConf();
      this.form = form;
      if (form === 'notice') {
        this.setting.autoClose = false;
        this.setting.showClose = true;
      }
    }
    config(cfg) {
      this.setting = assignConfig(this.setting, cfg);
    }
    info(txt, config) {
      const params = config ? assignConfig(this.setting, config) : copyConfig(this.setting);
      params.type = 'info';
      params.content = txt;
      return judgeReMsg.call(this, params);
    }
    warning(txt, config) {
      const params = config ? assignConfig(this.setting, config) : copyConfig(this.setting);
      params.type = 'warning';
      params.content = txt;
      return judgeReMsg.call(this, params);
    }
    success(txt, config) {
      const params = config ? assignConfig(this.setting, config) : copyConfig(this.setting);
      params.type = 'success';
      params.content = txt;
      return judgeReMsg.call(this, params);
    }
    error(txt, config) {
      const params = config ? assignConfig(this.setting, config) : copyConfig(this.setting);
      params.type = 'error';
      params.content = txt;
      return judgeReMsg.call(this, params);
    }
    loading(txt, config) {
      this.closeAll();
      const params = config ? assignConfig(this.setting, config) : copyConfig(this.setting);
      params.type = 'loading';
      params.autoClose = false;
      params.content = txt;
      return judgeReMsg.call(this, params);
    }
    remove(id) {
      this.oMsgs.delete(id);
    }
    closeAll() {
      this.oMsgs.forEach(v => {
        v.inst.close();
      });
    }
  }

  const message = new Gmsg('msg');
  const notice = new Gmsg('notice');

  exports.message = message;
  exports.notice = notice;

  return exports;

})({});
//# sourceMappingURL=index.js.map
