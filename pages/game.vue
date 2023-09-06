<script setup>
/**
 * @type Array<{ prop: { type: "uri", value: string }, item: { type: "uri", value: string }, p: { type: "uri", value: string }, label1: { type: "literal", "xml:lang": string, value: string }, label2: { type: "literal", "xml:lang": string, value: string } }>
 */
const bindings = [
  {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P31"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P31"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "être humain"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "nature de l'élément"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P27"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q11768"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P27"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Égypte antique"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "pays de citoyenneté"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P2348"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q177819"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P2348"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Ancien Empire de l'Égypte"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "période"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P3373"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q122426"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P3373"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Hénoutsen"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "frère ou sœur"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P3373"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q387014"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P3373"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Ânkhkhâf"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "frère ou sœur"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P3373"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q453219"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P3373"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Néfertkaou"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "frère ou sœur"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P3373"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q471584"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P3373"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Néfermaât"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "frère ou sœur"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P26"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q122426"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P26"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Hénoutsen"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "conjoint ou conjointe"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P39"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q37110"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P39"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "pharaon"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "fonction"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P27"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q177819"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P27"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Ancien Empire de l'Égypte"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "pays de citoyenneté"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P22"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q189371"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P22"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Snéfrou"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "père"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P3373"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q746710"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P3373"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Rahotep"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "frère ou sœur"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P3373"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q760610"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P3373"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Ranefer"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "frère ou sœur"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P3373"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7244639"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P3373"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Hétéphérès"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "frère ou sœur"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P97"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q37110"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P97"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "pharaon"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "titre de noblesse"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P1343"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q602358"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P1343"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Dictionnaire encyclopédique Brockhaus et Efron"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "décrit par"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P1343"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q3181656"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P1343"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "The Nuttall Encyclopædia"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "décrit par"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P1343"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q46002746"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P1343"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Dictionary of African Biography"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "décrit par"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P1343"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q867541"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P1343"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "XIe édition de l'Encyclopædia Britannica"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "décrit par"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P1343"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1054563"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P1343"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Table de Saqqarah"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "décrit par"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P910"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q18085377"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P910"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Catégorie:Khéops"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "catégorie"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q176607"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Horbaf"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q199861"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Khéphren"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P3373"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q760621"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P3373"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Kanefer"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "frère ou sœur"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P1343"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1138524"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P1343"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Realencyclopädie der classischen Altertumswissenschaft"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "décrit par"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P1343"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q2657718"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P1343"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "encyclopédie soviétique arménienne"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "décrit par"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P25"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q256515"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P25"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Hétep-Hérès Ire"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "mère"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P26"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q456487"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P26"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Khâmerernebty Ire"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "conjoint ou conjointe"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P26"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q464954"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P26"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Mérititès Ire"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "conjoint ou conjointe"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q209397"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Djédefrê"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P53"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q211001"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P53"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "IVe dynastie égyptienne"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "famille"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q237636"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Hétep-Hérès II"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q239884"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Kaouab Ier"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P106"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q372436"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P106"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "homme d'État"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "occupation"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P21"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q6581097"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P21"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "masculin"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "sexe ou genre"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q12061705"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Mérititès"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P119"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q37200"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P119"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "pyramide de Khéops"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "lieu de sépulture"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q542742"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Hordjédef"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q553532"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Chaefchufu"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q725897"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Néfermaât"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q944684"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Minkhâf"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q453159"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Néfertiabet"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q453207"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Mérésânkh II"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }, {
    "prop": {
      "type": "uri",
      "value": "http://www.wikidata.org/prop/direct/P40"
    },
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q456487"
    },
    "p": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/P40"
    },
    "label1": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "Khâmerernebty Ire"
    },
    "label2": {
      "xml:lang": "fr",
      "type": "literal",
      "value": "enfant"
    }
  }];

/**
 * @type Map<string, any[]>
 */
const propertyIdToOptionsGroup = new Map();
for (const binding of bindings) {
  const propId = binding.prop.value;
  (propertyIdToOptionsGroup.has(propId) ? propertyIdToOptionsGroup.get(propId) : (() => {
    const newGroup = [];
    propertyIdToOptionsGroup.set(propId, newGroup);
    return newGroup;
  })()).push(binding);
}
const optionsGroups = [...propertyIdToOptionsGroup.values()];
</script>

<template>
  <OptionsGroup v-for="optionsGroup in optionsGroups" :data="optionsGroup"></OptionsGroup>
</template>