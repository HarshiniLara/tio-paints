const paintChildren = [
    {
        "name": "UNDERCOATS",
        "child": [
            {
                "name": "Wallputty",
                "child": ["Tio Maxx Wallputty"]
            },
            {
                "name": "Primer",
                "child": ["Tio Interior Primer", "Tio Maxx Exterior Primer", "Tio 2in1 Primer"]
            }
        ]
    },
    {
        "name": "INTERIOR EMULSIONS",
        "child": [
            {
                "name": "JAZZMI Interior Emulsion"
            }
        ]
    },
    {
        "name": "EXTERIOR EMULSIONS",
        "child": [
            {
                "name": "MAXXPRO Exterior Emulsion"
            }
        ]
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
        ]
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
        ]
    },
    {
        "name": "Tile Cleaner"
    }
]
const constructionChemicals = [
    {
        "name": "Water Proofing",
        "child": [
            {
                "name": "TioLastick2k"
            }
        ]
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
        ]
    },
    {
        "name": "Admixture",
        "child": [
            {
                "name": "Tio 222"
            }
        ]
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
        ]
    },
    {
        "name": "Matt Finish",
        "child": [
            {
                "name": "Matt Ceramic Coating"
            }
        ]
    },
    {
        "name": "Handmade Sinks"
    }
]

export const navItems = [
    {
        "name": "HOME"
    },
    {
        "name": "PAINTS",
        "child": paintChildren
    },
    {
        "name": "TILING SOLUTIONS",
        "child": tilingSolutions
    },
    {
        "name": "CONSTRUCTION CHEMICALS",
        "child": constructionChemicals
    },
    {
        "name": "KITCHEN SINKS",
        "child": kitchenSinks
    }
]


