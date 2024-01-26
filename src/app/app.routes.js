"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var panel_component_1 = require("./panel/panel.component");
var character_component_1 = require("./character/character.component");
exports.routes = [
    { path: '', component: panel_component_1.PanelComponent },
    { path: ':character', component: character_component_1.CharacterComponent }
];
