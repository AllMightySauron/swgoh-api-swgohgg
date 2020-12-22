/*jshint esversion: 6 */

/**
 * Summary stats for characters.
 * @typedef {object} CharStats
 * @property {number}    count    Number of roster units for this unit type.
 * @property {number}    galacticLegendCount  Number of Galactic Legends.
 * @property {number[]}  levels   Number of characters per level.
 * @property {number[]}  rarities Number of characters per star level.
 * @property {number[]}  gear     Number of characters per gear level.
 * @property {number}    zetas    Number of zetas applied to characters.
 */

/**
 * Summary stats for ships.
 * @typedef {object} ShipStats
 * @property {number}    count    Number of roster units for this unit type.
 * @property {number[]}  levels   Number of ships per level.
 * @property {number[]}  rarities Number of ships per star level.
 */

/**
 * Summary stats from player roster.
 * @typedef {object} PlayerStats
 * @property {CharStats} chars     Number of ship with specific number of stars.
 * @property {ShipStats} ships Number of Galactic Legends on player roster.
 */

 /**
  * Unit gear data.
  * @typedef {object} UnitGear
  * @property {number} slot Unit gear slot number.
  * @property {boolean} is_obtained Is unit gear slot filled.
  * @property {string} base_id Gear base id for this slot.
  */

/**
 * Unit ability data.
 * @typedef {object} UnitAbility
 * @property {boolean} is_omega Ability is omega.
 * @property {boolean} is_zeta Ability is zeta.
 * @property {string} name Ability name.
 * @property {number} ability_tier Ability tier.
 * @property {string} id Ability id.
 * @property {number} tier_max Ability tier max.
 */

/**
 * Unit detail data.
 * @typedef {object} UnitDetail
 * @property {number} relic_tier Unit relic tier.
 * @property {UnitGear[]} gear Unit gear per slot.
 * @property {number} power Unit galactic power.
 * @property {number} combat_type Unit combat type (1 for toons, 2 for ships)
 * @property {string[]} mod_set_ids Array of mod set ids for this unit.
 * @property {string} base_id Unit base id.
 * @property {number} gear_level Unit gear level.
 * @property {object} stats Unit stats.
 * @property {string} name Unit name.
 * @property {number} level Unit level.
 * @property {string} url Player unit URL relative to swgoh.gg.
 * @property {number} rarity Unit rarity (number of stars).
 * @property {UnitAbility[]} ability_data Unit ability data.
 * @property {string[]} zeta_abilities List of zeta ability ids.
 */

/**
 * @typedef {object} GearLevelData
 * @property {string} tier Gear tier level.
 * @property {string[]} gear Array with gear ids required at this tier level.
 */

/**
 * Character data as returned by the swgoh.gg/api/characters/ api.
 * @typedef {object} CharacterData
 * @property {string} name Character name.
 * @property {string} base_id Character base id.
 * @property {number} pk Character primary key??.
 * @property {string} url Character URL from swgoh.gg.
 * @property {string} image Character image URL relative to swgoh.gg.
 * @property {number} power Character power.
 * @property {string} description Character description.
 * @property {number} combat_type Character combat type (1 for toons and 2 for ships).
 * @property {GearLevelData[]} gear_levels Character gear levels.
 * @property {string} alignment Character alignement description (between Dark Side and Light side).
 * @property {string[]} categories Character categories (Jedi, Leader, ...).
 * @property {string[]} ability_classes Character ability classes.
 * @property {string} role Character role.
 * @property {string} ship Character ship id.
 * @property {number} ship_slot Character ship slot.
 * @property {number} activate_shard_count Number of shards required for character activation.
 */

 /**
  * Ship data as returned by swgoh.gg/api/ships/ api.
  * @typedef {object} ShipData
  * @property {string} name Ship name.
  * @property {string} base_id Ship base id.
  * @property {string} url Ship URL from swgoh.gg.
  * @property {string} image Ship image relative to swgoh.gg.
  * @property {number} power Ship power.
  * @property {string} description Ship description.
  * @property {number} combat_type Ship combat type (always 2).
  * @property {string} alignment Ship alignment (Light Side or Dark Side).
  * @property {string[]} categories Array of ship categories.
  * @property {string[]} ability_classes Array of ship ability classes.
  * @property {string} role Ship role.
  * @property {boolean} capital_ship Whether this is a capital ship.
  * @property {number} activate_shard_count Number of shards neede to activate ship.
  */

/**
 * Ability data as returned by the /api/abilities api.
 * @typedef {object} AbilityData
 * @property {string} base_id Ability base id.
 * @property {string} name Ability name.
 * @property {string} image Ability image URL relative to swgoh.gg.
 * @property {string} url Ability URL from the swgoh.gg site.
 * @property {number} tier_max Max tier for this ability.
 * @property {boolean} is_zeta Is this ability a zeta ability.
 * @property {boolean} is_omega Is this ability an omega ability.
 * @property {number} combat_type Ability combat type (1 for toons and 2 for ships).
 * @property {number} type Ability type.
 * @property {string} character_base_id Character base id for this ability.
 * @property {string} ship_base_id Ship base id for this ability.
 */

/**
 * Gear recipe ingredient.
 * @typedef {object} GearRecipeIngredient
 * @property {number} amount Amount of ingredient to use.
 * @property {string} gear Gear base id for ingredient.
 */

/**
 * Gear recipe.
 * @typedef {object} GearRecipe
 * @property {string} base_id Recipe base id.
 * @property {string} result_id Recipe gear resulting id.
 * @property {number} cost Recipe execution cost.
 * @property {GearRecipeIngredient[]} ingredients Recipe ingredients.
 */

/**
 * Gear data.
 * @typedef {object} Gear
 * @property {string} base_id Gear base id.
 * @property {GearRecipe[]} recipes Requered recipes for generating gear.    
 * @property {number} tier Gear tier.
 * @property {number} required_level Required level for this gear.
 * @property {object} stats Gear stats increase.
 * @property {string} mark Gear mark.
 * @property {number} cost Gear generation cost. 
 * @property {string} image Gear image URL relative to swgoh.gg.
 * @property {string} URL Gear URL on the swgoh.gg site.
 * @property {GearRecipeIngredient[]} ingredients Gear ingredients.
 * @property {string} name Gear name.
 */

/**
 * Player fleet arena data.
 * @typedef {object} PlayerFleetArena
 * @property {string[]} members Ship member ids in use for fleet area.
 * @property {string[]} reinforcements Ship reinforcement ids for fleet arena.
 * @property {string} leader Ship leader id for fleet arena.
 * @property {number} rank Player fleet arena rank.
 */

/**
 * Player arena data.
 * @typedef {object} PlayerArena
 * @property {string[]} members Character ids for squard members used in arena.
 * @property {string} leader Character id of the squad leader in use for the arena.
 * @property {number} rank Player rank in the arena.
 */

/**
 * Partial player data.
 * @typedef {object} PlayerDetails
 * @property {string} last_updated Last update moment.
 * @property {number} galactic_power Player galactic power.
 * @property {number} pve_battles_won Number of PVE battles won by player.
 * @property {number} character_galactic_power Player galactic power from character roster.
 * @property {number} guild_contribution Number of player contribution to the guild.
 * @property {number } guild_exchange_donations Number of guild exchange donations.
 * @property {PlayerFleetArena} fleet_area Player fleet arena data.
 * @property {number} guild_id Player guild id.
 * @property {string} arena_leader_base_id Character id for current player arena leader.
 * @property {number} galactic_war_won Number of galactic wars own by player.
 * @property {number} pve_hard_won Number of hard PVE battles won.
 * @property {string} guild_name Player guild name.
 * @property {number} arena_rank Player arena rank.
 * @property {number} guild_raid_won Number of guild raids won by player.
 * @property {PlayerArena} arena Arena data for player.
 * @property {string} name Player name.
 * @property {number} ally_code Player ally code.
 * @property {number} pvp_battles_won Number of PVP battles won by player.
 * @property {number} level Player level.
 * @property {number} ship_galactic_power Player galactic power from ship roster.
 * @property {string} url Player URL from swgoh.gg.
 * @property {number} ship_battles_won Number of ship battles won by player.
 */

/**
 * Player Unit data.
 * @typedef {object} PlayerUnit
 * @property {UnitDetail} data Player unit data details.
 */

/**
 * Full player data (as returned by the swgoh.gg/api/player API).
 * @typedef {object} Player
 * @property {PlayerUnit[]} units Units on player roster.
 * @property {PlayerDetails} data Actual player data.
 */

/**
 * Guild player data.
 * @typedef {object} GuildPlayer
 * @property {string} arena Player arena.
 * @property {string} arena_rank Player arena rank.
 * @property {string} arena_leader_base_id Player character base id for arena leader.
 * @property {string} last_updated Data update moment.
 * @property {string} name Player name.
 * @property {number} galactic_war_won Number of Galactic Wars won.
 * @property {number} ally_code Player ally code.
 * @property {number} galactic_power Player galactic power.
 * @property {number} level Player level.
 * @property {number} pve_hard_won Number o Hard PVE battles won.
 * @property {number} pve_battles_won Number of PVE battles won.
 * @property {number} character_galactic_power Player galactic power for characters.
 * @property {number} fleet_arena Fleet arena.
 * @property {number} ship_galactic_power Player galactic power for ships.
 * @property {number} pvp_battles_won Number of PVP battles won.
 * @property {number} guild_exchange_donations Number of guild donations from player.
 * @property {string} url Player URL relative to swgoh.gg.
 * @property {number} guild_contribution Player guild contribution.
 * @property {number} ship_battles_won Number of ship battles won.
 * @property {number} guild_raid_won Number of guild raids won.
 */

/**
 * Guild player.
 * @typedef {object} GuildPlayer
 * @property {PlayerUnit[]} units Guild player units.
 * @property {GuildPlayer} data Guild player data.
 */

/**
 * Guild detailed data.
 * @typedef {object} GuildDetails
 * @property {string} name Guild name.
 * @property {number} member_count Guild member count.
 * @property {number} galactic_power Guild galactic power.
 * @property {number} rank Guild rank.
 * @property {number} profile_count Number of player profiles in the guild.
 * @property {number} id Guild id.
 */

/**
 * Guild data as returned by the /api/guild/${guildId} api
 * @typedef {object} Guild
 * @property {GuildPlayer[]} players Guild players.
 * @property {GuildDetails} data Guild data details.
 */

/**
 * Primary mod statistics.
 * @typedef {object} PrimaryModStat
 * @property {number} stat_id Stat id.
 * @property {string} name Stat name.
 * @property {number} value Stat value.
 * @property {string} display_value Properly formatted stat display value.
 */

/**
 * Secondary mod statistics.
 * @typedef {object} SecondaryModStat
 * @property {number} roll Stat roll.
 * @property {number} stat_id Stat id.
 * @property {string} name Stat name.
 * @property {number} value Stat value.
 * @property {string} display_value Properly formatted stat display value.
 */

/**
 * Player mod.
 * @typedef {object} PlayerMod
 * @property {number} slot Mod slot.
 * @property {SecondaryModStat[]} secondary_stats Mod secondary stats.
 * @property {number} set Mod set.
 * @property {number} level Mod level.
 * @property {number} tier Mod tier.
 * @property {PrimaryModStat} primary_stat Mod primary stat.
 * @property {string} character Id of character with mod.
 * @property {string} id Mod id.
 * @property {number} rarity Mod rarity.
 */

/**
 * Player mods as returned by the /api/players/${allyCode}/mods/ api.
 * @typedef {object} PlayerMods
 * @property {number} count Mod count for player.
 * @property {PlayerMod[]} mods Array of player mods.
 */

/**
 * Maximum unit levels.
 */
const MAX_UNIT_LEVELS = 85;

/**
 * Maximum unit stars.
 */
const MAX_UNIT_STARS = 7;

/**
 * Maximum character gear level.
 */
const MAX_CHAR_GEAR_LEVEL = 13;

/**
 * Enum for combat type.
 */
const CombatTypeEnum = { 
    // CombatTypeChar represents character units
    "CombatTypeChar": 1, 
     // CombatTypeShip represents shipts units
    "CombatTypeShip": 2 
};

/**
 * Enum for ability type.
 */
const AbilityTypeEnum = {
    "AbilityTypeBasic": 1,
    "AbilityTypeSpecial": 2,
    "AbilityTypeLeader": 3,
    "AbilityTypeUnique": 4,
    "AbilityTypeCrew": 5
};

/**
 * Enum for statistical type.
 */
const StatTypeEnum = {
    "StatHealth": 1,
    "StatStrength": 2,
	"StatAgility": 3,
	"StatTactics": 4,
    "StatSpeed": 5,
    "StatPhysicalDamage": 6,
    "StatSpecialDamage": 7,
    "StatArmor": 8,
    "StatResistance": 9,
    "StatArmorPenetration": 10,
    "StatResistancePenetration": 11,
    "StatDodgeChance": 12,
    "StatDeflectionChance": 13,
    "StatPhysicalCriticalChance": 14,
    "StatSpecialCriticalChance": 15,
	"StatCriticalDamage": 16,
	"StatPotency": 17,
	"StatTenaticy": 18,
	"StatHealthSteal": 27,
	"StatProtection": 28,
    "StatPhysicalAccuracy": 37,
    "StatSpecialAccuracy": 38,
	"StatPhysicalCriticalAvoidance": 39,
	"StatSpecialCriticalAvoidance" : 40
};

/**
 * Main API helper class.
 */
class SwgohGGApi {
    /**
     * Class constructor.
     * @param {string} user The authentication user.
     * @param {string} password The authentication password.
     */
    constructor (user, password) {
        const log4js = require("log4js");

        const loggerConfig = require('./log4jsconf.json');
        log4js.configure(loggerConfig);

        this.logger = log4js.getLogger();

        this.urlBase = 'https://swgoh.gg';
        this.token = SwgohGGApi.getToken(user, password);

        // load character acronyms from file
        const ACRONYMS_FILE = module.path ? module.path + '/resources/toon_acronyms.json' : 'resources/toon_acronyms.json';
        this.acronyms = SwgohGGApi.loadAcronyms(ACRONYMS_FILE);
    }

    /**
     * Get authentication token.
     * @static
     * @param {string} user The authentication user.
     * @param {string} password The authentication password.
     * @returns {string} The basic authentication token encoded as base64.
     */
    static getToken(user, password) {
        return Buffer.from(`${user}:${password}`).toString('base64'); 
    }

    /**
     * Load unit acronyms from JSON file.
     * @static
     * @param {string} file name.
     * @returns {Map<string, string>} Acronyms map between acronym and full unit name.
     */
    static loadAcronyms(fileName) {
        // file system access module
        const fs = require('fs');

        var tempAcronyms = JSON.parse(fs.readFileSync(fileName, 'utf8'));

        // create new acronym map
        const acronyms = {
            chars: new Map(),
            ships: new Map()
        };

        // add entries to maps
        tempAcronyms.chars.forEach(acronym => acronyms.chars.set(acronym.acronym.toLowerCase(), acronym.name));
        tempAcronyms.ships.forEach(acronym => acronyms.ships.set(acronym.acronym.toLowerCase(), acronym.name));

        return acronyms;
    }

    /**
     * Get number of units of specific type from player data.
     * @static
     * @param {Player} player The player data JSON object.
     * @param {CombatTypeEnum} type The unit type.
     * @returns {number} The number of owned characters derived from player data.
     */
    static getUnitTypeCount (player, type) {
        return player.units.filter(unit => unit.data.combat_type == type).length;
    }

    /**
     * Get number of characters from player data.
     * @static
     * @param {Player} player The player data JSON object.
     * @returns {number} The number of owned characters derived from player data.
     */
    static getCharacterCount(player) {
        return SwgohGGApi.getUnitTypeCount(player, CombatTypeEnum.CombatTypeChar);
    }

    /**
     * Get number of ships from player data.
     * @static
     * @param {Player} player The player data JSON object.
     * @returns {number} The number of owned ships derived from player data.
     */
    static getShipCount(player) {
        return SwgohGGApi.getUnitTypeCount(player, CombatTypeEnum.CombatTypeShip);
    }

    /**
     * Checks if the unit is a GL.
     * @static
     * @param {UnitDetail} unit The unit data to check for GL.
     * @returns {boolean} Whether this unit is a GL.
     */
    static isGL(unit) {
        return unit.zeta_abilities.filter(abilityName => abilityName.includes('GALACTICLEGEND')).length > 0;
    }

    /**
     * Gets summary statistics from player data.
     * @static
     * @param {Player} player The player data.
     * @returns {PlayerStats} Object with summarized player data.
     */
    static getPlayerStatsSummary(player) {
        /** @type {PlayerStats} */
        var result = { 
            chars: {
                count: 0,
                galacticLegendCount: 0,
                levels: new Array(MAX_UNIT_LEVELS).fill(0),
                rarities: new Array(MAX_UNIT_STARS).fill(0),
                gear:  new Array(MAX_CHAR_GEAR_LEVEL).fill(0),
                zetas: 0,
            },
            ships: {
                count: 0,
                levels: new Array(MAX_UNIT_LEVELS).fill(0),
                rarities: new Array(MAX_UNIT_STARS).fill(0)
            }
        };

        // loop over units
        for(var i = 0; i < player.units.length; i++) {
            const unit = player.units[i];

            // handle characters and ships
            if (unit.data.combat_type == CombatTypeEnum.CombatTypeChar) {
                // increase character count
                result.chars.count++;

                // test for GL
                if (SwgohGGApi.isGL(unit.data)) {
                    result.chars.galacticLegendCount++;
                }

                // increase level count
                result.chars.levels[unit.data.level - 1]++;

                // increase rarity count
                result.chars.rarities[unit.data.rarity - 1]++;

                // increase gear count
                result.chars.gear[unit.data.gear_level - 1]++;

                // increase zeta count
                result.chars.zetas += unit.data.zeta_abilities.length;
            } else if (unit.data.combat_type == CombatTypeEnum.CombatTypeShip) {
                // increase ship count
                result.ships.count++;

                // increase level count
                result.ships.levels[unit.data.level - 1]++;

                // increase rarity count
                result.ships.rarities[unit.data.rarity - 1]++;
            }
        }

        return result;
    }

    /**
     * Get a specific unit directly from the player unit roster.
     * @static
     * @param {Player} player The player data object.
     * @param {string} searchName The character name to search for (exact match).
     * @returns {UnitDetail} The unit from player roster.
     */
    static getPlayerUnitFromUnits(player, searchName) {
        var result;

        const playerUnit = player.units.find(unit => unit.data.name.toLowerCase() == searchName.toLowerCase());

        if (playerUnit) result = playerUnit.data;

        return result;
    }

    /**
     * Get ability type description.
     * @static
     * @param {AbilityTypeEnum} type Ability type enum.
     * @returns {string} ability type description
     */
    static getAbilityTypeDescription(type) {
        switch (type) {
            case AbilityTypeEnum.AbilityTypeBasic:
                return "Basic";
            case AbilityTypeEnum.AbilityTypeSpecial: 
                return "Special";
            case AbilityTypeEnum.AbilityTypeLeader:
                return "Leader";
            case AbilityTypeEnum.AbilityTypeUnique:
                return "Unique";
            case AbilityTypeEnum.AbilityTypeCrew:
                return "Crew";
            default:
                return `Unknown ability: ${type}`;
        }
    }

    /**
     * Fetch REST data using XMLHttpRequest with auto retry.
     * @param {string} method String with desired method (GET or POST).
     * @param {string} url Endpoint URL.
     * @param {object} payload The JSON payload to use.
     * @param {number} maxRetries The maximum number of retries.
     * @returns {XMLHttpRequest} The XMLHttpRequest object.
     */
    fetchRetry(method, url, payload, maxRetries) {
        if (this.logger) this.logger.debug(`fetchRetry@swgohgg-api: ${method}(t)ing data from "${url}"`);

        const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xhr = new XMLHttpRequest();

        // open syncronous
        xhr.open(method, url, false);

        // setting request headers
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader("Authorization", `Basic ${this.token}`);

        if (maxRetries > 0) {
            // get JSON string from payload
            if (payload) {
                xhr.send(JSON.stringify(payload));
            } else {
                xhr.send();
            }

            // bearer token expired?
            if (xhr.readyState == xhr.DONE && xhr.status >= 500) {
                if (this.logger) this.logger.error(`fetchRetry@swgohgg-api: error with status ${xhr.status} (${xhr.responseText}). retrying...`);

                // retry send
                return this.fetchRetry(method, url, payload, maxRetries - 1);
            } else {
                return xhr;
            }
        } else {
            return xhr;
        }
    }

    /**
     * Try to fetch REST data using XMLHttpRequest limiting the number of retries.
     * @param {string} method String with desired method (GET or POST).
     * @param {string} url Endpoint URL.
     * @param {object} payload The JSON payload to use (optional).
     * @returns {XMLHttpRequest} The XMLHttpRequest obejct.
     */
    fetch(method, url, payload) {
        const MAX_RETRIES = 3;

        return this.fetchRetry(method, url, payload, MAX_RETRIES);
    }

    /** 
     * Builds local cache from basic character, ability and gear data.
     * @private
     */
    buildCache() {
        // set TTL to one hour
        const MAX_TTL_SECONDS = 3600;
        const now = new Date();

        if (!this.cache) {
            if (this.logger) this.logger.debug('buildCache@swgohgg-api: No cache found, fetching new cache data');

            // build cache object
            this.cache = {
                characters: this.fetchCharacters(),
                ships: this.fetchShips(),
                abilities: this.fetchAbilities(),
                gear: this.fetchGear(),
                updated: new Date()
            };
        } else if (now.getTime() - this.cache.updated.getTime() > MAX_TTL_SECONDS * 1000) {
            if (this.logger) this.logger.debug('buildCache@swgohgg-api: Cache TTL exceeded, rebuilding cache');

            // ttl exceeded, let's rebuild cache
            this.cache = undefined;

            this.buildCache();
        }
    }

    /**
     * Load all characters from SWGOH.GG database using the /api/characters api.
     * @private
     * @returns {Map<string, CharacterData>} Map between character base_id and the character data.
     */
    fetchCharacters() {
        if (this.logger) this.logger.debug('fetchCaracters@swgohgg-api: fetching character data from swgoh.gg');

        var result;

        const xhr = this.fetch('GET', `${this.urlBase}/api/characters/`);

        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            const tempChars = JSON.parse(xhr.responseText);

            /** @type {Map<string, CharacterData>} */
            result = new Map();

            tempChars.forEach(char => {
                result.set(char.base_id, char);
            });
            
            
        } else {
            this.logger.error(`fetchCaracters@swgohgg-api: API error loading characters (ready state = ${xhr.readyState}, status = ${xhr.status})`);
        }

        return result;
    }

    /**
     * Load all ships from SWGOH.GG database using the /api/ships api.
     */
    fetchShips() {
        if (this.logger) this.logger.debug('fetchShips@swgohgg-api: fetching ship data from swgoh.gg');

        var result;

        const xhr = this.fetch('GET', `${this.urlBase}/api/ships/`);

        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            const tempShips = JSON.parse(xhr.responseText);

            /** @type {Map<string, ShipData>} */
            result = new Map();

            tempShips.forEach(ship => {
                result.set(ship.base_id, ship);
            });
            
            
        } else {
            this.logger.error(`fetchShips@swgohgg-api: API error loading ships (ready state = ${xhr.readyState}, status = ${xhr.status})`);
        }

        return result;
    }

    /**
     * Load all abilities from SWGOH.GG database using the /api/abilities.
     * @private
     * @returns {Max<string, AbilityData>} Map between the ability id and the corresponding ability data.
     */
    fetchAbilities() {
        if (this.logger) this.logger.debug('fetchAbilities@swgohgg-api: fetching ability data from swgoh.gg');

        var result;

        // get ability info from swgoh.gg
        const xhr = this.fetch('GET', `${this.urlBase}/api/abilities/`);

        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get character data from function
            var tempAbilities = JSON.parse(xhr.responseText);

            // create new ability map
            result = new Map();

            // add entries to map
            tempAbilities.forEach(ability => {
                result.set(ability.base_id, ability);
            });
        } else {
            this.logger.error(`fetchAbilities@swgohgg-api: API error loading abilities (ready state = ${xhr.readyState}, status = ${xhr.status})`);
        }

        return result;
    }

     /**
     * Load all gear from SWGOH.GG database using the /api/gear api.
     * @private
     * @returns {Map<string, Gear>} Map between the gear base id and its corresponding data.
     */
    fetchGear() {
        if (this.logger) this.logger.debug('fetchGear@swgohgg-api: fetching gear data from swgoh.gg');

        var result;

        // getting generic gear data
        const xhr = this.fetch('GET', `${this.urlBase}/api/gear/`);

        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get character data from function
            var tempGears = JSON.parse(xhr.responseText);

            // create new map
            result = new Map();

            // add entries to map
            tempGears.forEach(gear => {
                result.set(gear.base_id, gear);
            });
        } else {
            this.logger.error(`fetchGear@swgohgg-api: API error loading gears (ready state = ${xhr.readyState}, status = ${xhr.status})`);
        }

        return result;
    }

    /**
     * Gets a character from the local cache.
     * @param {string} baseId The character base id.
     * @returns {CharacterData} The character data.
     */
    getCharacter(baseId) {
        this.buildCache();

        return this.cache.characters.get(baseId);
    }

    /**
     * Gets a ship from the local cache.
     * @param {string} baseId The character base id.
     * @returns {ShipData} The character data.
     */
    getShip(baseId) {
        this.buildCache();

        return this.cache.ships.get(baseId);
    }

    /**
     * Gets a specific character from the local cache (using acronyms, full name or partial name method).
     * @param {string} name Character name.
     * @returns {CharacterData} The character data.
     */
    findCharacter(name) {
        if (this.logger) this.logger.debug(`findCaracter@swgohgg-api: searching cache for character "${name}"`);

        var result;

        this.buildCache();

        // lower case for comparisons
        var searchName = name.toLowerCase();

        // test for acronym
        if (this.acronyms.chars.has(searchName)) {
            // set new search name to acronym mapping
            searchName = this.acronyms.chars.get(searchName).toLowerCase();

            if (this.logger) this.logger.debug(`findCharacter@swgohgg-api: mapped "${name}" to "${searchName}"`);
        }

        // search for full unit name from cache
        result = Array.from(this.cache.characters.values()).find(char => char.name.toLowerCase() == searchName);

        if (result) {
            if (this.logger) this.logger.debug(`findCharacter@swgohgg-api: full name matched to id "${result.base_id}" (${result.name})`);
        } else {
            // not found: try substring

            // loop over characters
            const characters = Array.from(this.cache.characters.values());

            for (var i = 0; i < characters.length; i++) {
                const character = characters[i];

                // test for name (ignoring case)
                if (character.name.toLowerCase().includes(searchName)) {
                    result = character;

                    if (this.logger) this.logger.debug(`findCharacter@swgohgg-api: partial name matched to id "${result.base_id}" (${result.name})`);
                    break;
                }
            }
        }

        return result;
    }

    /**
     * Gets a specific ship from the local cache (using acronyms, full name or partial name method).
     * @param {string} name Character name.
     * @returns {ShipData} The ship data.
     */
    findShip(name) {
        if (this.logger) this.logger.debug(`findShip@swgohgg-api: searching cache for ship "${name}"`);

        var result;

        this.buildCache();

        // lower case for comparisons
        var searchName = name.toLowerCase();

        // test for acronym
        if (this.acronyms.ships.has(searchName)) {
            // set new search name to acronym mapping
            searchName = this.acronyms.ships.get(searchName).toLowerCase();

            if (this.logger) this.logger.debug(`findShip@swgohgg-api: mapped "${name}" to "${searchName}"`);
        }

        // search for full unit name from cache
        result = Array.from(this.cache.ships.values()).find(ship => ship.name.toLowerCase() == searchName);

        if (result) {
            if (this.logger) this.logger.debug(`findShip@swgohgg-api: full name matched to id "${result.base_id}" (${result.name})`);
        } else {
            // not found: try substring

            // loop over characters
            const ships = Array.from(this.cache.ships.values());

            for (var i = 0; i < ships.length; i++) {
                const ship = ships[i];

                // test for name (ignoring case)
                if (ship.name.toLowerCase().includes(searchName)) {
                    result = ship;

                    if (this.logger) this.logger.debug(`findShip@swgohgg-api: partial name matched to id "${result.base_id}" (${result.name})`);
                    break;
                }
            }
        }

        return result;
    }

    /**
     * Gets an ability from the local cache.
     * @param {string} baseId The ability base_id.
     * @returns {AbilityData} The ability data.
     */
    getAbility(baseId) {
        this.buildCache();

        return this.cache.abilities.get(baseId);
    }

    /**
     * Get a gear from the local cache.
     * @param {string} baseId The gear id.
     * @returns {Gear} The desired gear.
     */
    getGear(baseId) {
        this.buildCache();

        return this.cache.gear.get(baseId);
    }

    /**
     * Gets player data from SWOGOH.GG by calling the /api/player/${allyCode} api.
     * @param {string} allyCode Player ally code.
     * @returns {Player} Player data object.
     */
    getPlayer(allyCode) {
        if (this.logger) this.logger.debug(`getPlayer@swgohgg-api: data request for ally code "${allyCode}"`);

         // get user info from swgoh.gg
         const xhr = this.fetch('GET', `${this.urlBase}/api/player/${allyCode}/`);

         /** @type {Player} */
         var Player;

         if (xhr.readyState == xhr.DONE && xhr.status == 200) {
             Player = JSON.parse(xhr.responseText);
         } else {
            this.logger.error(`getPlayer@swgoh.gg: API error loading player for ally code "${allyCode}" (ready state = ${xhr.readyState}, status = ${xhr.status})`);
         }

         return Player;
    }

    /**
     * Get guild data from SWOGOH.GG by calling the /api/guild/${guildId} api.
     * @param {number} guildId  The desired guild id.
     * @returns {Guild} The guild data.
     */
    getGuild(guildId) {
        if (this.logger) this.logger.debug(`getGuild@swgohgg-api: data request for guild id "${guildId}"`);

        // get guild data from swgoh.gg
        const xhr = this.fetch('GET', `${this.urlBase}/api/guild/${guildId}/`);

        /** @type {Guild} */
        var guild;

        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            guild = JSON.parse(xhr.responseText);
        } else {
            this.logger.error(`getGuild@swgoh.gg: API error loading guild data for guild id "${guildId}" (ready state = ${xhr.readyState}, status = ${xhr.status})`);
        }

        return guild;
    }

    /**
     * Get a specific unit directly from the player roster at SWOGOH.GG.
     * @param {string} allycode The desired ally code.
     * @param {string} name The unit name (or acronym).
     * @return {UnitDetail} Unit data.
     */
    getPlayerUnit(allyCode, name) {
        if (this.logger) this.logger.debug(`getPlayerCharacter@swgohgg-api: data request for ally code ${allyCode} and unit "${name}"`);

        var result;

        // find it
        const char = this.findCharacter(name);
        const ship = this.findShip(name);

        // sanity check
        if (char || ship) {
            const player = this.getPlayer(allyCode);

            // sanity check
            if (player && char) {
                result = SwgohGGApi.getPlayerUnitFromUnits(player, char.name);
            } else if (player && ship) {
                result = SwgohGGApi.getPlayerUnitFromUnits(player, ship.name);
            }
        }

        return result;
    }

    /**
     * Get player mods from SWOGOH.GG.
     * @param {string} allycode The desired ally code.
     * @returns {PlayerMods} Array of player mods. 
     */
    getPlayerMods(allyCode) {
        if (this.logger) this.logger.debug(`getPlayerMods@swgohgg-api: data request for ally code "${allyCode}"`);

        // get user info from swgoh.gg
        const xhr = this.fetch('GET', `${this.urlBase}/api/players/${allyCode}/mods/`);

        var playerMods;

        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get player data from function
            playerMods = JSON.parse(xhr.responseText);
        } else {
            this.logger.error(`getPlayerMods@swgohgg-api: API error loading player for ally code "${allyCode}" (ready state = ${xhr.readyState}, status = ${xhr.status})`);
        }

        return playerMods;
    }

}

module.exports = { SwgohGGApi, AbilityTypeEnum, CombatTypeEnum, StatTypeEnum };
