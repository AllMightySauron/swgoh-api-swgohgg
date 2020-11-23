/*jshint esversion: 6 */

const SwgohGGApi = require('../swgohgg-api');
const assert = require('assert');

// default api object
const config = require('../config.json');
const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

describe('Static methods', () => {
    it('getToken', () => {
        assert.strictEqual(SwgohGGApi.SwgohGGApi.getToken('user', 'password'), 'dXNlcjpwYXNzd29yZA==');
    });

    it ('loadAcronyms', () => {
        /** @type {Map<string, string>} */
        const acronyms = SwgohGGApi.SwgohGGApi.loadAcronyms('./resources/toon_acronyms.json');

        assert.strictEqual(typeof acronyms, "object");
        assert.strictEqual(acronyms.size > 0, true);
    });

    it ('getUnitTypeCount/getCharacterCount/getShipCount', () => {
        const player = api.getPlayer('232669733');

        assert.strictEqual(SwgohGGApi.SwgohGGApi.getUnitTypeCount(player, SwgohGGApi.CombatTypeEnum.CombatTypeChar) + 
                           SwgohGGApi.SwgohGGApi.getUnitTypeCount(player, SwgohGGApi.CombatTypeEnum.CombatTypeShip),
                           player.units.length);
        assert.strictEqual(SwgohGGApi.SwgohGGApi.getUnitTypeCount(player, SwgohGGApi.CombatTypeEnum.CombatTypeChar), 
                           SwgohGGApi.SwgohGGApi.getCharacterCount(player));
        assert.strictEqual(SwgohGGApi.SwgohGGApi.getUnitTypeCount(player, SwgohGGApi.CombatTypeEnum.CombatTypeShip), 
                           SwgohGGApi.SwgohGGApi.getShipCount(player));
    });

    it('isGL', () => {
        assert.strictEqual(SwgohGGApi.SwgohGGApi.isGL(api.getPlayerUnit('232669733', 'VADER')), false);
        assert.strictEqual(SwgohGGApi.SwgohGGApi.isGL(api.getPlayerUnit('973246862', 'SLKR')), true);
    });

    it('getSummaryData', () => {
        const player = api.getPlayer('232669733');
        const playerStats = SwgohGGApi.SwgohGGApi.getSummaryData(player);

        assert.strictEqual(playerStats.chars.count, playerStats.chars.levels.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.chars.count, playerStats.chars.rarities.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.chars.count, playerStats.chars.gear.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.chars.count, SwgohGGApi.SwgohGGApi.getCharacterCount(player));

        assert.strictEqual(playerStats.ships.count, playerStats.ships.levels.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.ships.count, playerStats.ships.rarities.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.ships.count, SwgohGGApi.SwgohGGApi.getShipCount(player));
    });

    it('getPlayerUnitFromUnits', () => {
        const player = api.getPlayer('232669733');

        const char = SwgohGGApi.SwgohGGApi.getPlayerUnitFromUnits(player, 'Darth Vader');
        assert.strictEqual(char.name, 'Darth Vader');
        assert.strictEqual(char.base_id, 'VADER');

        const ship = SwgohGGApi.SwgohGGApi.getPlayerUnitFromUnits(player, 'Chimaera');
        assert.strictEqual(ship.name, 'Chimaera');
        assert.strictEqual(ship.base_id, 'CAPITALCHIMAERA');
    });
});

describe('Base methods', () => {
    it('Constructor', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);
    });

    it('setDebug/getDebug', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        // defaults to false
        assert.strictEqual(api.isDebug(), false);

        api.setDebug(true);
        assert.strictEqual(api.isDebug(), true);
    });
});

describe ('API foundation', () => {

    it('fetchRetry(GET)', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        const reply = api.fetchRetry('GET', 'https://postman-echo.com/get?foo1=bar1&foo2=bar2', undefined, 3);

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.args.foo1, 'bar1');
        assert.strictEqual(jsonReply.args.foo2, 'bar2');
    });

    it('fetchRetry(POST)', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        const reply = api.fetchRetry('POST', 'https://postman-echo.com/post?hand=wave', undefined, 3);

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.args.hand, 'wave');
    });

    it('fetchRetry(POST payload)', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        const reply = api.fetchRetry('POST', 'https://postman-echo.com/post', { id: 10, name: 'John' }, 3);

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.data.id, 10);
        assert.strictEqual(jsonReply.data.name, 'John');
    });
});

describe('Local cache', () => {
    it('fetchCharacters', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        const chars = api.fetchCharacters();
    
        assert.strictEqual(chars.size > 0, true);
        assert.strictEqual(chars.has('VADER'), true);
        assert.strictEqual(chars.get('VADER').base_id, 'VADER');
    });

    it('fetchShips', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        const ships = api.fetchShips();
    
        assert.strictEqual(ships.size > 0, true);
        assert.strictEqual(ships.has('CAPITALCHIMAERA'), true);
        assert.strictEqual(ships.get('CAPITALCHIMAERA').base_id, 'CAPITALCHIMAERA');
    });

    it('fetchAbilities', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        const abilities = api.fetchAbilities();
    
        assert.strictEqual(abilities.size > 0, true);
        assert.strictEqual(abilities.has('leaderskill_VADER'), true);
        assert.strictEqual(abilities.get('leaderskill_VADER').base_id, 'leaderskill_VADER');
    });

    it('fetchGear', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        const gear = api.fetchGear();
    
        assert.strictEqual(gear.size > 0, true);

        // Mk 6 Nubian Design Tech
        assert.strictEqual(gear.has('126'), true);
        assert.strictEqual(gear.get('126').base_id, '126');
    });

    it ('buildCache', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi.SwgohGGApi(config.user, config.password);

        api.buildCache();

        assert.strictEqual(api.cache.characters.size > 0, true);
        assert.strictEqual(api.cache.abilities.size > 0, true);
        assert.strictEqual(api.cache.gear.size > 0, true);

        // force refresh
        const old = api.cache.updated;

        api.cache.updated = new Date(2010, 1, 1, 0, 0, 0, 0);
        api.buildCache();

        assert.strictEqual(api.cache.updated > old, true);
    });

    it('getCharacter', () => {
        assert.strictEqual(api.getCharacter('DUMMY'), undefined);
        assert.strictEqual(api.getCharacter('VADER').base_id, 'VADER');
    });

    it('findCharacter', () => {
        // not found
        assert.strictEqual(api.findCharacter('DUMMY'), undefined);
        // acronym
        assert.strictEqual(api.findCharacter('CLS').base_id, 'COMMANDERLUKESKYWALKER');
        // full name
        assert.strictEqual(api.findCharacter('Darth Vader').base_id, 'VADER');
        // partial name
        assert.strictEqual(api.findCharacter('Alpha').base_id, 'GEONOSIANBROODALPHA');
    });

    it('getShip', () => {
        assert.strictEqual(api.getShip('DUMMY'), undefined);
        assert.strictEqual(api.getShip('CAPITALCHIMAERA').base_id, 'CAPITALCHIMAERA');
    });

    it('getAbility', () => {
        assert.strictEqual(api.getAbility('DUMMY'), undefined);
        assert.strictEqual(api.getAbility('leaderskill_VADER').base_id, 'leaderskill_VADER');
    });

    it('getGear', () => {
        assert.strictEqual(api.getGear('DUMMY'), undefined);
        assert.strictEqual(api.getGear('126').base_id, '126');
        assert.strictEqual(api.getGear('126').name, 'Mk 6 Nubian Design Tech');
    });
});

describe('API data', () => {
    it('getPlayer', () => {
        const player = api.getPlayer('232669733');

        assert.strictEqual(Array.isArray(player.units), true);
        assert.strictEqual(player.data.ally_code, 232669733);
        assert.strictEqual(player.data.name, 'Sauron');
    });

    it('getGuild', () => {
        const guild = api.getGuild(66108);

        assert.strictEqual(Array.isArray(guild.players), true);
        assert.strictEqual(guild.data.id, 66108);
    });

    it('getPlayerUnit (toon)', () => {
        // not found
        assert.strictEqual(api.getPlayerUnit('232669733','DUMMY'), undefined);
        // acronym
        assert.strictEqual(api.getPlayerUnit('232669733', 'CLS').base_id, 'COMMANDERLUKESKYWALKER');
        // full name
        assert.strictEqual(api.getPlayerUnit('232669733', 'Darth Vader').base_id, 'VADER');
        // partial name
        assert.strictEqual(api.getPlayerUnit('232669733', 'Alpha').base_id, 'GEONOSIANBROODALPHA');
    });

    it('getPlayerUnit (ship)', () => {
        // not found
        assert.strictEqual(api.getPlayerUnit('232669733','DUMMY'), undefined);
        // acronym
        assert.strictEqual(api.getPlayerUnit('232669733', 'H1').base_id, 'CAPITALMONCALAMARICRUISER');
        // full name
        assert.strictEqual(api.getPlayerUnit('232669733', 'Chimaera').base_id, 'CAPITALCHIMAERA');
        // partial name
        assert.strictEqual(api.getPlayerUnit('232669733', 'tooth').base_id, 'HOUNDSTOOTH');
    });

    it('getPlayerMods', () => {
        const mods = api.getPlayerMods(232669733);

        
        assert.strictEqual(mods.count >= 0, true);
        assert.strictEqual(Array.isArray(mods.mods), true);
    });
});