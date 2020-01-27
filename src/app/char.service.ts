import { Injectable } from '@angular/core';

const CHAR_JSON_STR =
  `[{
	"idx": 1,
	"charClass": "Air Elemental",
	"charName": "",
	"charPic": "airElemental.jpg",
	"charLevel": "1",
	"hp": "10",
	"move": "10",
	"resist": "1",
	"abilities": [{
		"text": "Wallop - Strike +2  2d6 damage",
		"idx": 1,
		"charIdx": 1
	}, {
		"text": "Whirlwind - Strike +2  Knockdown",
		"idx": 2,
		"charIdx": 1
	}, {
		"text": "Lightning Storm - Area Strike +2  1d6 damage",
		"idx": 3,
		"charIdx": 1
	}, {
		"text": "Spell: Acid Rain Area Cast +1 If hit armor -2 (unless resist 2+)",
		"idx": 4,
		"charIdx": 1
	}, {
		"text": "Spell: Wind Barrier Cast +3  Create wall of wind 4 squares long. Missiles and small creatures blocked",
		"idx": 5,
		"charIdx": 1
	}],
	"armor": "1",
	"initiative": "0",
	"dodge": "3",
	"size": "Medium"
}, {
	"idx": 2,
	"charClass": "Succubus",
	"charName": "",
	"charPic": "succubus.jpg",
	"charLevel": "1",
	"hp": "8",
	"move": "6",
	"resist": "d4",
	"abilities": [{
		"text": "Whip - Strike +3 1d6 damage",
		"idx": 6,
		"charIdx": 2
	}, {
		"text": "Magic Missile - Ranged Strike +1 1d6 damage",
		"idx": 7,
		"charIdx": 2
	}, {
		"text": "Spell: Charm Cast +1 - If hit charmed for 1d6 - resist rounds (min 2",
		"idx": 8,
		"charIdx": 2
	}, {
		"text": "Fly",
		"idx": 9,
		"charIdx": 2
	}],
	"armor": "2",
	"initiative": "0",
	"dodge": "1",
	"size": "Medium"
}, {
	"idx": 3,
	"charClass": "Barbarian",
	"charName": "",
	"charPic": "barbarian.jpg",
	"charLevel": "1",
	"hp": "12",
	"move": "8",
	"resist": "1",
	"abilities": [{
		"text": "Sword - Strike +3 1d8 damage",
		"idx": 10,
		"charIdx": 3
	}, {
		"text": "Rage - Strike +5 2d6 damage. +2 Resist No Dodge until next turn",
		"idx": 11,
		"charIdx": 3
	}, {
		"text": "Slam - Strike +1 Knockdown",
		"idx": 12,
		"charIdx": 3
	}, {
		"text": "Track Creature",
		"idx": 13,
		"charIdx": 3
	}],
	"armor": "1",
	"initiative": "2",
	"dodge": "2",
	"size": "Medium"
}]`;

const CHAR_JSON = JSON.parse(CHAR_JSON_STR);
const CHARS = {};

for ( const chr of Object.keys(CHAR_JSON)) {
  const thisChr = CHAR_JSON[chr];
  CHARS[thisChr.charClass] = thisChr;
}

@Injectable({
  providedIn: 'root'
})
export class CharService {

  constructor() { }

  listChars() {
    return Object.keys(CHARS);
  }

  numChars() {
    return this.listChars().length;
  }

  getCharByName(charName: string) {
    return {name: charName, desc: CHARS[charName].size};
  }
}
