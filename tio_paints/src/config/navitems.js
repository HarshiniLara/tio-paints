const paints= [
    {
        "name": "Undercoats",
        "child": [
            {
                "name": "Wallputty",
                "child": ["Tio Maxx Wallputty"]
            },
            {
                "name": "Primer",
                "child": ["Tio Interior Primer", "Tio Maxx Exterior Primer", "Tio 2in1 Primer"]
            }
        ],
        "route": "/paints/undercoats"
    },
    {
        "name": "Interior Emulsions",
        "child": [
            {
                "name": "JAZZMI Interior Emulsion"
            }
        ],
        "route": "/paints/interioremulsions"
    },
    {
        "name": "Exterior Emulsions",
        "child": [
            {
                "name": "MAXXPRO Exterior Emulsion"
            }
        ],
        "route": "/paints/exterioremulsions"
    }
]
const tilingSolutions = [
    {
        "name": "Tile Adhesives",
        "child": [
            {
                "name": "Tio Bond 101"
            },
            {
                "name": "Tio Bond 202"
            },
            {
                "name": "Tio Bond 303"
            }
        ],
        "route": "/tilingsolutions/tileadhesives"
    },
    {
        "name": "Tile Grout",
        "child": [
            {
                "name": "Tio Maxx Grout"
            },
            {
                "name": "Tio Epoxy Grout"
            },
            {
                "name": "Tio RoofTile Grout"
            }
        ],
        "route": "/tilingsolutions/tilegrout"
    },
    {
        "name": "Tile Cleaner",
        "route": "/tilingsolutions/tilecleaner"
    }
]
const constructionChemicals = [
    {
        "name": "Water Proofing",
        "child": [
            {
                "name": "TioLastick2k"
            }
        ],
        "route": "/constructionchemicals/waterproofing"
    },
    {
        "name": "Bonding Agents",
        "child": [
            {
                "name": "SBR latex"
            },
            {
                "name": "Tio Bond EP"
            }
        ],
        "route": "/constructionchemicals/bondingagents"
    },
    {
        "name": "Admixture",
        "child": [
            {
                "name": "Tio 222"
            }
        ],
        "route": "/constructionchemicals/admixture"
    }
]
const kitchenSinks = [
    {
        "name": "Glossy Finish",
        "child": [
            {
                "name": "Glossy Plain"
            },
            {
                "name": "Glossy Ceramic Coating"
            }
        ],
        "route": "/kitchensinks/glossyfinish"
    },
    {
        "name": "Matt Finish",
        "child": [
            {
                "name": "Matt Ceramic Coating"
            }
        ],
        "route": "/kitchensinks/mattfinish"
    },
    {
        "name": "Handmade Sinks",
        "route": "/kitchensinks/handmadesinks"
    }
]

export const navItems = [
    {   
        key: 0,
        "name": "HOME",
        "route": "/"
    },
    {
        key: 1,
        "name": "PAINTS",
        "child": paints,
        "route": "/paints"
    },
    {
        key: 2,
        "name": "TILING SOLUTIONS",
        "child": tilingSolutions,
        "route": "/tilingsolutions"
    },
    {
        key: 3,
        "name": "CONSTRUCTION CHEMICALS",
        "child": constructionChemicals,
        "route": "/constructionchemicals"
    },
    {
        key: 4,
        "name": "KITCHEN SINKS",
        "child": kitchenSinks,
        "route": "/kitchensinks"
    }
]


