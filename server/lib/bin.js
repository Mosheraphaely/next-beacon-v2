'use strict';

const TerseQuery = require('./terse-query');

let q = process.argv[2];

if (!/->print\(/.test(q)) {
	q = q + '->print(ascii)';
}

TerseQuery.parse(q);
