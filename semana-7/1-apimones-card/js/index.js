'use strict';

import loader from "./modules/loader.js";

const documentReady = () => {
  loader();
};

document.addEventListener('DOMContentLoaded', documentReady);