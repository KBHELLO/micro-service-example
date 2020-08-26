'use strict';

const properties = require('../package.json');
const distance = require('../service/distance');

const controller = {
    about: function(req, res) {
        const aboutInfo = {
            name: properties.name,
            version: properties.version
        };
        res.json(aboutInfo);
    }
};