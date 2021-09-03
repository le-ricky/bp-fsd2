import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.API
export const APP_NAME = publicRuntimeConfig.APP_NAME
export const PRODUCTION = publicRuntimeConfig.PRODUCTION
export const DOMAIN = publicRuntimeConfig.DOMAIN

console.log(API)