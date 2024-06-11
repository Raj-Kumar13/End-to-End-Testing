import { ChainablePromiseElement, ChainablePromiseArray, ElementArray } from 'webdriverio'
import type { ReporterEntry } from '@wdio/types/build/Reporter.js'

export type WebdriverIoElement = ChainablePromiseElement<WebdriverIO.Element>
export type WebdriverIoElements = ChainablePromiseArray<ElementArray>
export type promiseElement = Promise<WebdriverIO.Element>
export type ReporterEntries = ReporterEntry[];