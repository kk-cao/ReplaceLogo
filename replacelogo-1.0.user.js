// ==UserScript==
// @name         动态网页优化
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  加速3D页面设置
// @author       CI
// @match        *://www.kujiale.com/*
// @match        *://kujiale.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function waitFor(selector, callback, timeout = 10000) {
    const start = Date.now();
    const timer = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(timer);
        callback(el);
      } else if (Date.now() - start > timeout) {
        clearInterval(timer);
        console.warn(`[脚本超时] ${selector} 未在 ${timeout / 1000}s 内加载`);
      }
    }, 300);
  }

function replaceLogo(container) {
  container.innerHTML = `
    <div style="display: flex; align-items: center;">
      <div style="
        width: 24px;
        height: 24px;
        background-image: url('//qhstaticssl.kujiale.com/siteassets/c13a670b5adc8d72-1571361865885.png?x-oss-process=image/resize,m_fill,w_33,h_33/format,webp');
        background-size: cover;
        background-position: center;
        border-radius: 4px;
        flex-shrink: 0;
      "></div>
      <div style="display: inline-flex; align-items: center; gap: 6px; margin-left: 8px;">
        <span style="
          font-size: 16px;
          font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
          font-weight: 600;
          color: #1D2129;
          line-height: 24px;
          white-space: nowrap;
        ">上海锡鼎实业有限公司</span>
      <span style="
        display: inline-flex;
        align-items: center;
        height: 20px;
        padding: 0 8px;
        font-size: 12px;
        font-weight: 500;
        color: #1D64F2;
        background-color: #E6F0FF;
        border-radius: 4px;
        line-height: 20px;
        white-space: nowrap;
        margin-left: 2px;
      ">
        企业<span style="margin-left: 4px; font-size: 10px;">∨</span>
      </span>
      </div>
    </div>
  `;
}



  waitFor('.J_switch_account', replaceLogo);
})();
