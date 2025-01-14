import 'ses';
import './lib/modal/plugin-modal';

import {
  ɵloadPlugin,
  setContextBuilder,
  ɵloadPluginByUrl,
} from './lib/load-plugin.js';

import type { PenpotContext } from '@penpot/plugin-types';

console.log('%c[PLUGINS] Loading plugin system', 'color: #008d7c');

repairIntrinsics({
  evalTaming: 'unsafeEval',
  stackFiltering: 'verbose',
  errorTaming: 'unsafe',
  consoleTaming: 'unsafe',
  errorTrapping: 'none',
});

const globalThisAny$ = globalThis as any;

globalThisAny$.initPluginsRuntime = (
  contextBuilder: (id: string) => PenpotContext
) => {
  try {
    console.log('%c[PLUGINS] Initialize runtime', 'color: #008d7c');
    setContextBuilder(contextBuilder);
    globalThisAny$.ɵcontext = contextBuilder('TEST');
    globalThis.ɵloadPlugin = ɵloadPlugin;
    globalThis.ɵloadPluginByUrl = ɵloadPluginByUrl;
  } catch (err) {
    console.error(err);
  }
};
