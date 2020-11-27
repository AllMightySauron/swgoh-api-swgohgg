/*jshint esversion: 6 */

const { SwgohGGApi, AbilityTypeEnum, CombatTypeEnum } = require('../swgohgg-api');
const assert = require('assert');

describe('Static methods', () => {
    it('getToken', () => {
        assert.strictEqual(SwgohGGApi.getToken('user', 'password'), 'dXNlcjpwYXNzd29yZA==');
    });

    it ('loadAcronyms', () => {
        /** @type {Map<string, string>} */
        const acronyms = SwgohGGApi.loadAcronyms('./resources/toon_acronyms.json');

        assert.strictEqual(typeof acronyms, "object");
        assert.strictEqual(acronyms.size > 0, true);
    });

    it ('getUnitTypeCount/getCharacterCount/getShipCount', () => {
        const player = require('./player.232669733.json');

        assert.strictEqual(SwgohGGApi.getUnitTypeCount(player, CombatTypeEnum.CombatTypeChar) + 
                           SwgohGGApi.getUnitTypeCount(player, CombatTypeEnum.CombatTypeShip),
                           player.units.length);
        assert.strictEqual(SwgohGGApi.getUnitTypeCount(player, CombatTypeEnum.CombatTypeChar), 
                           SwgohGGApi.getCharacterCount(player));
        assert.strictEqual(SwgohGGApi.getUnitTypeCount(player, CombatTypeEnum.CombatTypeShip), 
                           SwgohGGApi.getShipCount(player));
    });

    it('getPlayerUnitFromUnits', () => {
        const player = require('./player.232669733.json');

        const char = SwgohGGApi.getPlayerUnitFromUnits(player, 'Darth Vader');
        assert.strictEqual(char.name, 'Darth Vader');
        assert.strictEqual(char.base_id, 'VADER');

        const ship = SwgohGGApi.getPlayerUnitFromUnits(player, 'Chimaera');
        assert.strictEqual(ship.name, 'Chimaera');
        assert.strictEqual(ship.base_id, 'CAPITALCHIMAERA');
    });

    it('isGL', () => {
        const player = require('./player.973246862.json');

        assert.strictEqual(SwgohGGApi.isGL(SwgohGGApi.getPlayerUnitFromUnits(player, 'Darth Vader')), false);
        assert.strictEqual(SwgohGGApi.isGL(SwgohGGApi.getPlayerUnitFromUnits(player, 'Supreme Leader Kylo Ren')), true);
    });

    it('getPlayerStatsSummary', () => {
        const player = require('./player.973246862.json');
        const playerStats = SwgohGGApi.getPlayerStatsSummary(player);

        assert.strictEqual(playerStats.chars.count, playerStats.chars.levels.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.chars.count, playerStats.chars.rarities.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.chars.count, playerStats.chars.gear.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.chars.galacticLegendCount, 1);
        assert.strictEqual(playerStats.chars.count, SwgohGGApi.getCharacterCount(player));
        assert.strictEqual(playerStats.chars.zetas, 105);

        assert.strictEqual(playerStats.ships.count, playerStats.ships.levels.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.ships.count, playerStats.ships.rarities.reduce((accumulator, currentValue) => accumulator + currentValue));
        assert.strictEqual(playerStats.ships.count, SwgohGGApi.getShipCount(player));
    });

    it('getAbilityTypeDescription', () => {
        assert.strictEqual(SwgohGGApi.getAbilityTypeDescription(AbilityTypeEnum.AbilityTypeBasic), 'Basic');
        assert.strictEqual(SwgohGGApi.getAbilityTypeDescription(AbilityTypeEnum.AbilityTypeCrew), 'Crew');
        assert.strictEqual(SwgohGGApi.getAbilityTypeDescription(AbilityTypeEnum.AbilityTypeLeader), 'Leader');
        assert.strictEqual(SwgohGGApi.getAbilityTypeDescription(AbilityTypeEnum.AbilityTypeSpecial), 'Special');
        assert.strictEqual(SwgohGGApi.getAbilityTypeDescription(AbilityTypeEnum.AbilityTypeUnique), 'Unique');
        assert.strictEqual(SwgohGGApi.getAbilityTypeDescription(9999), 'Unknown ability: 9999');
    });
});

describe('Base methods', () => {
    it('Constructor', () => {
        const config = require('../config.json');
        const api = new SwgohGGApi(config.user, config.password);
    });
});

describe ('API foundation', () => {
    const config = require('../config.json');
    const api = new SwgohGGApi(config.user, config.password);

    it('fetchRetry(GET)', () => {        
        const reply = api.fetchRetry('GET', 'https://postman-echo.com/get?foo1=bar1&foo2=bar2', undefined, 3);

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.args.foo1, 'bar1');
        assert.strictEqual(jsonReply.args.foo2, 'bar2');
    });

    it('fetchRetry(POST)', () => {
       const reply = api.fetchRetry('POST', 'https://postman-echo.com/post?hand=wave', undefined, 3);

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.args.hand, 'wave');
    });

    it('fetchRetry(POST payload)', () => {
        const reply = api.fetchRetry('POST', 'https://postman-echo.com/post', { id: 10, name: 'John' }, 3);

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.data.id, 10);
        assert.strictEqual(jsonReply.data.name, 'John');
    });
});

describe('Local cache', () => {
    // default api object
    const config = require('../config.json');
    const api = new SwgohGGApi(config.user, config.password);

    it('fetchCharacters', () => {
        const chars = api.fetchCharacters();
    
        assert.strictEqual(chars.size > 0, true);
        assert.strictEqual(chars.has('VADER'), true);
        assert.strictEqual(chars.get('VADER').base_id, 'VADER');
    });

    it('fetchShips', () => {
        const ships = api.fetchShips();
    
        assert.strictEqual(ships.size > 0, true);
        assert.strictEqual(ships.has('CAPITALCHIMAERA'), true);
        assert.strictEqual(ships.get('CAPITALCHIMAERA').base_id, 'CAPITALCHIMAERA');
    });

    it('fetchAbilities', () => {
        const abilities = api.fetchAbilities();
    
        assert.strictEqual(abilities.size > 0, true);
        assert.strictEqual(abilities.has('leaderskill_VADER'), true);
        assert.strictEqual(abilities.get('leaderskill_VADER').base_id, 'leaderskill_VADER');
    });

    it('fetchGear', () => {
        const gear = api.fetchGear();
    
        assert.strictEqual(gear.size > 0, true);

        // Mk 6 Nubian Design Tech
        assert.strictEqual(gear.has('126'), true);
        assert.strictEqual(gear.get('126').base_id, '126');
    });

    it ('buildCache', () => {
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

    it('findShip', () => {
        // not found
        assert.strictEqual(api.findShip('DUMMY'), undefined);
        // acronym
        assert.strictEqual(api.findShip('H1').base_id, 'CAPITALMONCALAMARICRUISER');
        // full name
        assert.strictEqual(api.findShip('Chimaera').base_id, 'CAPITALCHIMAERA');
        // partial name
        assert.strictEqual(api.findShip('Tooth').base_id, 'HOUNDSTOOTH');
    });
});

describe('API data', () => {
    const config = require('../config.json');
    const api = new SwgohGGApi(config.user, config.password);
    
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