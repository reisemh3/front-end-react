export interface HeistMod {
  value: string
  matchSafe: string
}
 
export interface HeistTargetValue {
  name: string
  coinValue: number
  matchSafe: string
}

export interface HeistContractType {
  name: string
  matchSafe: string
}

export const heistModifiers: { [key: string]: HeistMod } = {
 "Monsters' Action Speed cannot be modified to below base value|Monsters cannot be Taunted": {
   value: "Monsters' Action Speed cannot be modified to below base value|Monsters cannot be Taunted",
   matchSafe: "mod",
 },
 "Patrol Packs have #% increased chance to be replaced by an Elite Patrol Pack": {
   value: "Patrol Packs have #% increased chance to be replaced by an Elite Patrol Pack",
   matchSafe: "epl",
 },
 "Monsters reflect #% of Physical Damage": {
   value: "Monsters reflect #% of Physical Damage",
   matchSafe: "\"f ph\"",
 },
 "Monsters have a #% chance to cause Elemental Ailments on Hit": {
   value: "Monsters have a #% chance to cause Elemental Ailments on Hit",
   matchSafe: "cau",
 },
 "Patrolling Monsters deal #% increased Damage": {
   value: "Patrolling Monsters deal #% increased Damage",
   matchSafe: "roll",
 },
 "#% increased Monster Movement Speed|#% increased Monster Attack Speed|#% increased Monster Cast Speed": {
   value: "#% increased Monster Movement Speed|#% increased Monster Attack Speed|#% increased Monster Cast Speed",
   matchSafe: "\"r at\"",
 },
 "Monsters deal #% extra Physical Damage as Fire": {
   value: "Monsters deal #% extra Physical Damage as Fire",
   matchSafe: "\" as f\"",
 },
 "#% less effect of Curses on Monsters": {
   value: "#% less effect of Curses on Monsters",
   matchSafe: "rses",
 },
 "Monsters are Hexproof": {
   value: "Monsters are Hexproof",
   matchSafe: "hex",
 },
 "Reward Room Monsters take #% reduced Damage": {
   value: "Reward Room Monsters take #% reduced Damage",
   matchSafe: "\"m monsters t\"",
 },
 "Monsters have a #% chance to avoid Poison, Impale, and Bleeding": {
   value: "Monsters have a #% chance to avoid Poison, Impale, and Bleeding",
   matchSafe: "son,",
 },
 "Monsters fire 2 additional Projectiles": {
   value: "Monsters fire 2 additional Projectiles",
   matchSafe: "2",
 },
 "Reward Rooms have #% increased Monsters": {
   value: "Reward Rooms have #% increased Monsters",
   matchSafe: "oms",
 },
 "Monsters deal #% extra Physical Damage as Lightning": {
   value: "Monsters deal #% extra Physical Damage as Lightning",
   matchSafe: "\"s lig\"",
 },
 "Monsters have +#% chance to Suppress Spell Damage": {
   value: "Monsters have +#% chance to Suppress Spell Damage",
   matchSafe: "\"o s\"",
 },
 "Guards deal #% increased Damage": {
   value: "Guards deal #% increased Damage",
   matchSafe: "\"ds d\"",
 },
 "#% more Monster Life": {
   value: "#% more Monster Life",
   matchSafe: "\"\\d+% more Monster Life\"",
 },
 "+#% Monster Chaos Resistance|+#% Monster Elemental Resistances": {
   value: "+#% Monster Chaos Resistance|+#% Monster Elemental Resistances",
   matchSafe: "ao",
 },
 "#% increased Monster Damage": {
   value: "#% increased Monster Damage",
   matchSafe: "\"d monster d\"",
 },
 "Reward Room Monsters deal #% increased Damage": {
   value: "Reward Room Monsters deal #% increased Damage",
   matchSafe: "\"m monsters d\"",
 },
 "Patrol Packs take #% reduced damage": {
   value: "Patrol Packs take #% reduced damage",
   matchSafe: "\"ks t\"",
 },
 "(20-30)% increased number of Rare Monsters": {
   value: "(20-30)% increased number of Rare Monsters",
   matchSafe: "umb",
 },
 "Monsters gain #% of Maximum Life as Extra Maximum Energy Shield": {
   value: "Monsters gain #% of Maximum Life as Extra Maximum Energy Shield",
   matchSafe: "\"m l\"",
 },
 "Monsters reflect #% of Elemental Damage": {
   value: "Monsters reflect #% of Elemental Damage",
   matchSafe: "\"f el\"",
 },
 "Lockdown occurs immediately when Alert Level is full": {
   value: "Lockdown occurs immediately when Alert Level is full",
   matchSafe: "kd",
 },
 "Monsters cannot be Stunned|#% more Monster Life": {
   value: "Monsters cannot be Stunned|#% more Monster Life",
   matchSafe: "stun",
 },
 "All Monster Damage from Hits always Ignites": {
   value: "All Monster Damage from Hits always Ignites",
   matchSafe: "lw",
 },
 "Monsters deal #% extra Physical Damage as Cold": {
   value: "Monsters deal #% extra Physical Damage as Cold",
   matchSafe: "\"as c\"",
 },
 "Monsters' skills Chain # additional times": {
   value: "Monsters' skills Chain # additional times",
   matchSafe: "mes",
 },
 "Guards take #% reduced Damage": {
   value: "Guards take #% reduced Damage",
   matchSafe: "\"rds t\"",
 },
 "Reinforcements have #% increased Movement Speed|Reinforcements have #% increased Attack Speed|Reinforcements have #% increased Cast Speed": {
   value: "Reinforcements have #% increased Movement Speed|Reinforcements have #% increased Attack Speed|Reinforcements have #% increased Cast Speed",
   matchSafe: "rei",
 },
 "+#% Monster Physical Damage Reduction": {
   value: "+#% Monster Physical Damage Reduction",
   matchSafe: "ucti",
 },
 "Monsters have #% chance to Impale with Attacks": {
   value: "Monsters have #% chance to Impale with Attacks",
   matchSafe: "\"o im\"",
 },
 "#% reduced Job speed": {
   value: "#% reduced Job speed",
   matchSafe: "job",
 },
 "Monsters have #% chance to Avoid Elemental Ailments": {
   value: "Monsters have #% chance to Avoid Elemental Ailments",
   matchSafe: "\"id e\"",
 },
 "Cannot Leech from Monsters": {
   value: "Cannot Leech from Monsters",
   matchSafe: "eec",
 },
 "Players cannot inflict Exposure": {
   value: "Players cannot inflict Exposure",
   matchSafe: "nfl",
 },
 "Monsters Blind on Hit": {
   value: "Monsters Blind on Hit",
   matchSafe: "lind",
 },
 "Area has patches of Burning Ground": {
   value: "Area has patches of Burning Ground",
   matchSafe: "burn",
 },
 "Area has patches of Chilled Ground": {
   value: "Area has patches of Chilled Ground",
   matchSafe: "hill",
 },
 "Area has patches of Consecrated Ground": {
   value: "Area has patches of Consecrated Ground",
   matchSafe: "nsec",
 },
 "Area has patches of desecrated ground": {
   value: "Area has patches of desecrated ground",
   matchSafe: "esec",
 },
 "Area has patches of Shocked Ground which increase Damage taken by #%": {
   value: "Area has patches of Shocked Ground which increase Damage taken by #%",
   matchSafe: "hoc",
 },
 "Players have #% less Accuracy Rating": {
   value: "Players have #% less Accuracy Rating",
   matchSafe: "\"s ac\"",
 },
 "Players have #% less Mana Recovery Rate per #% Alert Level": {
   value: "Players have #% less Mana Recovery Rate per #% Alert Level",
   matchSafe: "\"a r\"",
 },
 "Players have #% less Life Recovery Rate per #% Alert Level": {
   value: "Players have #% less Life Recovery Rate per #% Alert Level",
   matchSafe: "\"fe r\"",
 },
 "Players cannot Regenerate Life, Mana or Energy Shield": {
   value: "Players cannot Regenerate Life, Mana or Energy Shield",
   matchSafe: "reg",
 },
 "Players have #% less Recovery Rate of Life and Energy Shield": {
   value: "Players have #% less Recovery Rate of Life and Energy Shield",
   matchSafe: "\"ss r\"",
 },
 "Players have #% less Energy Shield Recovery Rate per #% Alert Level": {
   value: "Players have #% less Energy Shield Recovery Rate per #% Alert Level",
   matchSafe: "\"ss en\"",
 },
 "Players are Cursed with Elemental Weakness": {
   value: "Players are Cursed with Elemental Weakness",
   matchSafe: "akn",
 },
 "Players have #% less Evasion per #% Alert Level": {
   value: "Players have #% less Evasion per #% Alert Level",
   matchSafe: "eva",
 },
 "Players have -#% to amount of Suppressed Spell Damage Prevented|Monsters have #% increased Accuracy Rating": {
   value: "Players have -#% to amount of Suppressed Spell Damage Prevented|Monsters have #% increased Accuracy Rating",
   matchSafe: "amo",
 },
 "No Travel Cost": {
   value: "No Travel Cost",
   matchSafe: "rav",
 },
 "Buffs on Players expire #% faster": {
   value: "Buffs on Players expire #% faster",
   matchSafe: "uf",
 },
 "Monsters Hinder on Hit with Spells": {
   value: "Monsters Hinder on Hit with Spells",
   matchSafe: "hind",
 },
 "Monsters have #% chance to gain a Frenzy Charge on Hit": {
   value: "Monsters have #% chance to gain a Frenzy Charge on Hit",
   matchSafe: "\"a fr\"",
 },
 "-#% Player Fire Resistance per #% Alert Level": {
   value: "-#% Player Fire Resistance per #% Alert Level",
   matchSafe: "\"re r\"",
 },
 "-#% Player Lightning Resistance per #% Alert Level": {
   value: "-#% Player Lightning Resistance per #% Alert Level",
   matchSafe: "\"g re\"",
 },
 "-#% Player Cold Resistance per #% Alert Level": {
   value: "-#% Player Cold Resistance per #% Alert Level",
   matchSafe: "\"r co\"",
 },
 "Monsters have #% chance to gain a Power Charge on Hit": {
   value: "Monsters have #% chance to gain a Power Charge on Hit",
   matchSafe: "\"a po\"",
 },
 "Monsters steal Power, Frenzy and Endurance charges on Hit": {
   value: "Monsters steal Power, Frenzy and Endurance charges on Hit",
   matchSafe: "wer,",
 },
 "(20-30)% more Magic Monsters": {
   value: "(20-30)% more Magic Monsters",
   matchSafe: "gic",
 },
 "Players are Cursed with Enfeeble": {
   value: "Players are Cursed with Enfeeble",
   matchSafe: "enf",
 },
 "Monsters have #% increased Critical Strike Chance|+#% to Monster Critical Strike Multiplier": {
   value: "Monsters have #% increased Critical Strike Chance|+#% to Monster Critical Strike Multiplier",
   matchSafe: "mul",
 },
 "Players have #% reduced effect of Non-Curse Auras from Skills": {
   value: "Players have #% reduced effect of Non-Curse Auras from Skills",
   matchSafe: "aur",
 },
 "Players have #% less Cooldown Recovery Rate": {
   value: "Players have #% less Cooldown Recovery Rate",
   matchSafe: "coo",
 },
 "Monsters have #% increased Area of Effect": {
   value: "Monsters have #% increased Area of Effect",
   matchSafe: "\"ed ar\"",
 },
 "Monsters Poison on Hit": {
   value: "Monsters Poison on Hit",
   matchSafe: "\"s po\"",
 },
 "Monsters Maim on Hit with Attacks": {
   value: "Monsters Maim on Hit with Attacks",
   matchSafe: "maim",
 },
 "#% increased Total Heist Fee": {
   value: "#% increased Total Heist Fee",
   matchSafe: "tot",
 },
 "Players are Cursed with Vulnerability": {
   value: "Players are Cursed with Vulnerability",
   matchSafe: "vu",
 },
 "Players are Cursed with Temporal Chains": {
   value: "Players are Cursed with Temporal Chains",
   matchSafe: "temp",
 },
 "Players gain #% reduced Flask Charges": {
   value: "Players gain #% reduced Flask Charges",
   matchSafe: "\"Players gain \\d+% reduced Flask Charges\"",
 },
 "Players gain #% reduced Flask Charges per #% Alert Level": {
   value: "Players gain #% reduced Flask Charges per #% Alert Level",
   matchSafe: "\"s pe\"",
 },
 "Players have #% less Armour per #% Alert Level": {
   value: "Players have #% less Armour per #% Alert Level",
   matchSafe: "\"r pe\"",
 },
 "Players have #% reduced Chance to Block|Players have #% less Armour": {
   value: "Players have #% reduced Chance to Block|Players have #% less Armour",
   matchSafe: "bloc",
 },
 "Monsters have #% chance to gain an Endurance Charge on Hit": {
   value: "Monsters have #% chance to gain an Endurance Charge on Hit",
   matchSafe: "\"an en\"",
 },
 "Monsters take #% reduced Extra Damage from Critical Strikes": {
   value: "Monsters take #% reduced Extra Damage from Critical Strikes",
   matchSafe: "ikes",
 },
 "Alert Level increases by #% per second": {
   value: "Alert Level increases by #% per second",
   matchSafe: "ases",
 },
 "The Ring takes no Cut": {
   value: "The Ring takes no Cut",
   matchSafe: "cut",
 },
 "Players have #% less Area of Effect": {
   value: "Players have #% less Area of Effect",
   matchSafe: "\"ss are\"",
 },
 "-#% maximum Player Resistances": {
   value: "-#% maximum Player Resistances",
   matchSafe: "\"m p\"",
 },
};
export const heistTargetValues: { [key: string]: HeistTargetValue } = {
 "Ceremonial Goblet Ceremonial Goblet": {
   name: "Ceremonial Goblet Ceremonial Goblet",
   coinValue: 339,
   matchSafe: "ob",
 },
 "Crested Golden Idol Crested Golden Idol": {
   name: "Crested Golden Idol Crested Golden Idol",
   coinValue: 339,
   matchSafe: "ste",
 },
 "Golden Ceremonial Mask Golden Ceremonial Mask": {
   name: "Golden Ceremonial Mask Golden Ceremonial Mask",
   coinValue: 339,
   matchSafe: "mas",
 },
 "Golden Prayer Idol Golden Prayer Idol": {
   name: "Golden Prayer Idol Golden Prayer Idol",
   coinValue: 339,
   matchSafe: "ay",
 },
 "Golden Grotesque Golden Grotesque": {
   name: "Golden Grotesque Golden Grotesque",
   coinValue: 339,
   matchSafe: "q",
 },
 "Golden Sacrificial Glyph Golden Sacrificial Glyph": {
   name: "Golden Sacrificial Glyph Golden Sacrificial Glyph",
   coinValue: 339,
   matchSafe: "sa",
 },
 "Urn of Farud Urn of Farud": {
   name: "Urn of Farud Urn of Farud",
   coinValue: 963,
   matchSafe: "fa",
 },
 "Box of Tripyxis Box of Tripyxis": {
   name: "Box of Tripyxis Box of Tripyxis",
   coinValue: 963,
   matchSafe: "bo",
 },
 "Incense of Keth Incense of Keth": {
   name: "Incense of Keth Incense of Keth",
   coinValue: 963,
   matchSafe: "inc",
 },
 "Crest of Ezomyr Crest of Ezomyr": {
   name: "Crest of Ezomyr Crest of Ezomyr",
   coinValue: 963,
   matchSafe: "zo",
 },
 "Ez Myrae Tome Ez Myrae Tome": {
   name: "Ez Myrae Tome Ez Myrae Tome",
   coinValue: 963,
   matchSafe: "ae",
 },
 "Hand of Arimor Hand of Arimor": {
   name: "Hand of Arimor Hand of Arimor",
   coinValue: 963,
   matchSafe: "han",
 },
 "Abberathine Horns Abberathine Horns": {
   name: "Abberathine Horns Abberathine Horns",
   coinValue: 963,
   matchSafe: "bb",
 },
 "Admiral Proclar’s Pipe Admiral Proclar’s Pipe": {
   name: "Admiral Proclar’s Pipe Admiral Proclar’s Pipe",
   coinValue: 963,
   matchSafe: "dm",
 },
 "Alchemical Chalice Alchemical Chalice": {
   name: "Alchemical Chalice Alchemical Chalice",
   coinValue: 963,
   matchSafe: "lc",
 },
 "Ogham Candelabra Ogham Candelabra": {
   name: "Ogham Candelabra Ogham Candelabra",
   coinValue: 963,
   matchSafe: "og",
 },
 "Tusked Hominid Skull Tusked Hominid Skull": {
   name: "Tusked Hominid Skull Tusked Hominid Skull",
   coinValue: 963,
   matchSafe: "ku",
 },
 "Celestial Stone Celestial Stone": {
   name: "Celestial Stone Celestial Stone",
   coinValue: 963,
   matchSafe: "cel",
 },
 "Urn of the Original Ashes Urn of the Original Ashes": {
   name: "Urn of the Original Ashes Urn of the Original Ashes",
   coinValue: 963,
   matchSafe: "gi",
 },
 "Heart Coil Heart Coil": {
   name: "Heart Coil Heart Coil",
   coinValue: 963,
   matchSafe: "rt",
 },
 "Enigmatic Assembly A4 Enigmatic Assembly A4": {
   name: "Enigmatic Assembly A4 Enigmatic Assembly A4",
   coinValue: 963,
   matchSafe: "4",
 },
 "Enigmatic Assembly B2 Enigmatic Assembly B2": {
   name: "Enigmatic Assembly B2 Enigmatic Assembly B2",
   coinValue: 963,
   matchSafe: "2",
 },
 "Enigmatic Assembly C5 Enigmatic Assembly C5": {
   name: "Enigmatic Assembly C5 Enigmatic Assembly C5",
   coinValue: 963,
   matchSafe: "5",
 },
 "Enigmatic Assembly D1 Enigmatic Assembly D1": {
   name: "Enigmatic Assembly D1 Enigmatic Assembly D1",
   coinValue: 963,
   matchSafe: "1",
 },
 "Mirror of Teklatipitzi Mirror of Teklatipitzi": {
   name: "Mirror of Teklatipitzi Mirror of Teklatipitzi",
   coinValue: 1359,
   matchSafe: "rr",
 },
 "Bust of Emperor Caspiro Bust of Emperor Caspiro": {
   name: "Bust of Emperor Caspiro Bust of Emperor Caspiro",
   coinValue: 1359,
   matchSafe: "sp",
 },
 "Golden Hetzapal Idol Golden Hetzapal Idol": {
   name: "Golden Hetzapal Idol Golden Hetzapal Idol",
   coinValue: 1359,
   matchSafe: "za",
 },
 "Flask of Welakath Flask of Welakath": {
   name: "Flask of Welakath Flask of Welakath",
   coinValue: 1359,
   matchSafe: "fl",
 },
 "Forbidden Lamp Forbidden Lamp": {
   name: "Forbidden Lamp Forbidden Lamp",
   coinValue: 1359,
   matchSafe: "fo",
 },
 "The Goddess of Water The Goddess of Water": {
   name: "The Goddess of Water The Goddess of Water",
   coinValue: 1359,
   matchSafe: "wa",
 },
 "The Golden Ibis The Golden Ibis": {
   name: "The Golden Ibis The Golden Ibis",
   coinValue: 1359,
   matchSafe: "ibi",
 },
 "Impossible Crystal Impossible Crystal": {
   name: "Impossible Crystal Impossible Crystal",
   coinValue: 1359,
   matchSafe: "po",
 },
 "Living Ice Living Ice": {
   name: "Living Ice Living Ice",
   coinValue: 1359,
   matchSafe: "iv",
 },
 "Seal of Lunaris Seal of Lunaris": {
   name: "Seal of Lunaris Seal of Lunaris",
   coinValue: 1359,
   matchSafe: "lu",
 },
 "Golden Matatl Idol Golden Matatl Idol": {
   name: "Golden Matatl Idol Golden Matatl Idol",
   coinValue: 1359,
   matchSafe: "ata",
 },
 "The Sea Pearl Heirloom The Sea Pearl Heirloom": {
   name: "The Sea Pearl Heirloom The Sea Pearl Heirloom",
   coinValue: 1359,
   matchSafe: "rl",
 },
 "Seal of Solaris Seal of Solaris": {
   name: "Seal of Solaris Seal of Solaris",
   coinValue: 1359,
   matchSafe: "ola",
 },
 "Golden Napuatzi Idol Golden Napuatzi Idol": {
   name: "Golden Napuatzi Idol Golden Napuatzi Idol",
   coinValue: 1359,
   matchSafe: "pu",
 },
 "Essence Burner Essence Burner": {
   name: "Essence Burner Essence Burner",
   coinValue: 1699,
   matchSafe: "sen",
 },
 "Ancient Seal Ancient Seal": {
   name: "Ancient Seal Ancient Seal",
   coinValue: 1699,
   matchSafe: "ie",
 },
 "Blood of Innocence Blood of Innocence": {
   name: "Blood of Innocence Blood of Innocence",
   coinValue: 1699,
   matchSafe: "nn",
 },
 "Dekhara’s Resolve Dekhara’s Resolve": {
   name: "Dekhara’s Resolve Dekhara’s Resolve",
   coinValue: 1699,
   matchSafe: "kh",
 },
 "Orbala’s Fifth Adventure Orbala’s Fifth Adventure": {
   name: "Orbala’s Fifth Adventure Orbala’s Fifth Adventure",
   coinValue: 1699,
   matchSafe: "ba",
 },
 "Staff of the first Sin Eater Staff of the first Sin Eater": {
   name: "Staff of the first Sin Eater Staff of the first Sin Eater",
   coinValue: 1699,
   matchSafe: "af",
 },
 "Sword of the Inverse Relic Sword of the Inverse Relic": {
   name: "Sword of the Inverse Relic Sword of the Inverse Relic",
   coinValue: 3399,
   matchSafe: "sw",
 },
 "Golden Slave Idol Golden Slave Idol": {
   name: "Golden Slave Idol Golden Slave Idol",
   coinValue: 3399,
   matchSafe: "sl",
 },
 "Golden Xoplotli Idol Golden Xoplotli Idol": {
   name: "Golden Xoplotli Idol Golden Xoplotli Idol",
   coinValue: 3399,
   matchSafe: "xo",
 },
};
export const heistContractTypes: { [key: string]: HeistContractType} = {
 "Deception": {
   name: "Deception",
   matchSafe: "dece",
 },
 "Counter-Thaumaturgy": {
   name: "Counter-Thaumaturgy",
   matchSafe: "ounte",
 },
 "Perception": {
   name: "Perception",
   matchSafe: "erc",
 },
 "Agility": {
   name: "Agility",
   matchSafe: "gil",
 },
 "Brute Force": {
   name: "Brute Force",
   matchSafe: "bru",
 },
 "Demolition": {
   name: "Demolition",
   matchSafe: "mol",
 },
 "Engineering": {
   name: "Engineering",
   matchSafe: "eeri",
 },
 "Lockpicking": {
   name: "Lockpicking",
   matchSafe: "kp",
 },
 "Trap Disarmament": {
   name: "Trap Disarmament",
   matchSafe: "sar",
 },
};