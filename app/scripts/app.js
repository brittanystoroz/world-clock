

try {var App = window.App = Ember.Application.create();
} catch (error) {
    if (error.name === 'InvalidStateError') {
        window.indexedDB.deleteDatabase('App');
        window.document.location.reload();
    } else {
        throw error;
    }
}

// Order and include as you please.
require('scripts/l10n/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');