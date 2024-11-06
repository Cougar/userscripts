// ==UserScript==
// @name        Email auto-confirmation in osta.ee
// @namespace   Violentmonkey Scripts
// @match       https://www.osta.ee/*
// @grant       none
// @version     1.2
// @author      Cougar
// @license     MIT
// @homepageURL https://github.com/Cougar/userscripts
// @downloadURL https://github.com/Cougar/userscripts/blob/main/osta-ee-email-auto-confirm.user.js
// @description Fill email confirmation automatically
// @icon        data:image/png;base64,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
// ==/UserScript==

/* jshint esversion: 6 */
(function (doc) {
  "use strict";

  function FillConfirm(el) {
    var confirmid = el + "-confirm";
    if (doc.getElementById(el).value) {
      doc.getElementById(confirmid).value = doc.getElementById(el).value;
    }
  }

  function AutoConfirm(el) {
    FillConfirm(el.target.id);
  }

  function AddAutoConfirm() {
    var ids = doc.querySelectorAll('[id]');
    Array.prototype.forEach.call(ids, function(el, i) {
      if (el.id.startsWith("email-") && el.id.endsWith("-confirm")) {
        var emailid = el.id.replace("-confirm", "");
        FillConfirm(emailid);
        var email = doc.getElementById(emailid);
        if (email.addEventListener) {
          email.addEventListener('focus', AutoConfirm, false);
        } else if (email.attachEvent) {
          email.attachEvent('onfocus', AutoConfirm);
        } else {
          email.onfocus = AutoConfirm;
        }
      }
    });
  }

  AddAutoConfirm();

  // Execute again when shipment tab opened
  var bidDetailModal = doc.getElementById('bid-details-modal');
  if (bidDetailModal) {
    var MO = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (nodeElement) {
          if (nodeElement.id === "OP-shipment") {
            AddAutoConfirm();
          }
        });
      });
    });
    MO.observe(bidDetailModal, { childList: true, subtree: true });
  }
})(document);