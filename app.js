var blessed = require("blessed"),
  contrib = require("blessed-contrib"),
  fs = require("fs"),
  path = require("path");

var screen = blessed.screen();

//create layout and widgets
var grid = new contrib.grid({ rows: 4, cols: 3, screen: screen });

var player_1_tree = contrib.tree({ fg: "green" });
player_1_tree = grid.set(0, 0, 1, 1, contrib.tree, {
  template: { lines: true },
  label: "Chris",
  width: "25%",
  height: "25%",
});

var player_2_tree = grid.set(1, 0, 1, 1, contrib.tree, {
  style: { text: "red" },
  template: { lines: true },
  label: "Calista",
  width: "25%",
  height: "25%",
});

var player_3_tree = grid.set(2, 0, 1, 1, contrib.tree, {
  style: { text: "red" },
  template: { lines: true },
  label: "Michael",
  width: "25%",
  height: "25%",
});

var player_4_tree = grid.set(3, 0, 1, 1, contrib.tree, {
  style: { text: "red" },
  template: { lines: true },
  label: "Megan",
  width: "25%",
  height: "25%",
});

//set tree
player_1_tree.setData({
  extended: true,
  children: {
    Propoerties: {
      children: {
        Banana: {},
        Apple: {},
        Cherry: {},
        Exotics: {
          children: {
            Mango: {},
            Papaya: {},
            Kiwi: {
              name: "Kiwi (not the bird!)",
              myCustomProperty: "hairy fruit",
            },
          },
        },
        Pear: {},
      },
    },
    Vegetables: { children: { Peas: {}, Lettuce: {}, Pepper: {} } },
  },
});
player_2_tree.setData({
  extended: true,
  children: {
    Propoerties: {
      children: {
        Banana: {},
        Apple: {},
        Cherry: {},
        Exotics: {
          children: {
            Mango: {},
            Papaya: {},
            Kiwi: {
              name: "Kiwi (not the bird!)",
              myCustomProperty: "hairy fruit",
            },
          },
        },
        Pear: {},
      },
    },
    Vegetables: { children: { Peas: {}, Lettuce: {}, Pepper: {} } },
  },
});
player_3_tree.setData({
  extended: true,
  children: {
    Propoerties: {
      children: {
        Banana: {},
        Apple: {},
        Cherry: {},
        Exotics: {
          children: {
            Mango: {},
            Papaya: {},
            Kiwi: {
              name: "Kiwi (not the bird!)",
              myCustomProperty: "hairy fruit",
            },
          },
        },
        Pear: {},
      },
    },
    Vegetables: { children: { Peas: {}, Lettuce: {}, Pepper: {} } },
  },
});
player_4_tree.setData({
  extended: true,
  children: {
    Propoerties: {
      children: {
        Banana: {},
        Apple: {},
        Cherry: {},
        Exotics: {
          children: {
            Mango: {},
            Papaya: {},
            Kiwi: {
              name: "Kiwi (not the bird!)",
              myCustomProperty: "hairy fruit",
            },
          },
        },
        Pear: {},
      },
    },
    Vegetables: { children: { Peas: {}, Lettuce: {}, Pepper: {} } },
  },
});

// Handling select event. Every custom property that was added to node is
// available like the "node.getPath" defined above
player_1_tree.on("select", function (node) {
  // console.log(node.name);
  screen.render();
});

player_2_tree.on("select", function (node) {
  if (node.myCustomProperty) {
    console.log(node.myCustomProperty);
  }
  // console.log(node.name);
  screen.render();
});

player_3_tree.on("select", function (node) {
  if (node.myCustomProperty) {
    console.log(node.myCustomProperty);
  }
  // console.log(node.name);
  screen.render();
});

player_4_tree.on("select", function (node) {
  if (node.myCustomProperty) {
    console.log(node.myCustomProperty);
  }
  // console.log(node.name);
  screen.render();
});

screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});

screen.key(["tab"], function (ch, key) {
  screen.focusNext();
  focusedDraw();
  screen.render();
});

function focusedDraw() {
  const [player1, player2, player3, player4] = [
    "Chris",
    "Calista",
    "Michael",
    "Megan",
  ];
  if (screen.focused === player_1_tree.rows) {
    player_1_tree.setLabel(`*${player1}*`);
  } else {
    player_1_tree.setLabel(`${player1}`);
  }

  if (screen.focused === player_2_tree.rows) {
    player_2_tree.setLabel(`*${player2}*`);
  } else {
    player_2_tree.setLabel(`${player2}`);
  }

  if (screen.focused === player_3_tree.rows) {
    player_3_tree.setLabel(`*${player3}*`);
  } else {
    player_3_tree.setLabel(`${player3}`);
  }
  if (screen.focused === player_4_tree.rows) {
    player_4_tree.setLabel(`*${player4}*`);
  } else {
    player_4_tree.setLabel(`${player4}`);
  }
}

player_1_tree.focus();
focusedDraw();
screen.render();
