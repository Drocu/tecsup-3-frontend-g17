'use strict';

import card from "./modules/card.js";
import header from "./modules/header.js";
import loader from "./modules/loader.js";

const documentReady = () => {
  loader();
  header();
  card();
};

document.addEventListener('DOMContentLoaded', documentReady);