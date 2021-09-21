/*
 * @Descripttion: 
 * @version: 
 * @Author: fmy1993
 * @Date: 2021-09-20 21:43:30
 * @LastEditors: fmy1993
 * @LastEditTime: 2021-09-22 07:49:02
 */
import defaultSettings from '@/settings'
// 如果有值就用里面的，没有就后面字符串
const title = defaultSettings.title || 'Vue Admin Template'
/**
 * 
 * @param {*} pageTitle 传入参数，拼成pagetitle-title，eg:table-Vue Admin Template
 * @returns 
 */
export default function getPageTitle(pageTitle) {
  // 如果有就返回
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  // 没有就直接返回title
  return `${title}`
}
