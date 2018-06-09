$(function() {

    var cats = [
    {
      name: "George",
      image: "https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?cs=srgb&dl=animal-pet-cute-259803.jpg&fm=jpg",
      clicks: 0
    },
    {
      name: "Peter",
      image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      clicks: 0
    },
    {
      name: "Fat Joe",
      image: "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
      clicks: 0
    },
    {
      name: "Voldemort",
      image: "https://www.bluecross.org.uk/sites/default/files/styles/thumbnail_pet/public/pets/149194.jpg?itok=xZLl3maM",
      clicks: 0
    }
  ];
  var selectedCatIndex = 0;

  var view = {
    init: function() {

      $('body').on('click', '.cat-list-item', function() {
        var element = $(this);
        var index = element.attr('id');
        controller.setSelectedCat(index);
      });

      $('body').on('click', '.image', function() {
        var element = $(this);
        var index = element.attr('id');
        controller.incrementCatClicks();
      });


      this.render();
    },

    render: function() {
      var catList = $('.cat-list');
      catList.html('');

      controller.getCats().forEach(function(cat, index) {
        var catListItem = $('<li id="' + index + '" class="cat-list-item">' + cat.name + '</li>')
        catList.append(catListItem);
      });

      var cat = controller.getSelectedCat();
      var name = $('.name');
      var image = $('.image');
      var counter = $('.click-counter');

      name.text(cat.name);
      image.attr('src', cat.image);
      counter.text(cat.clicks);
    }
  }

  var controller = {

    init: function() {
      view.init();
    },

    getCats: function() {
      return cats;
    },

    getSelectedCat: function() {
      return cats[selectedCatIndex];
    },

    setSelectedCat: function(index) {
      selectedCatIndex = index;
      view.render();
    },

    incrementCatClicks: function() {
      var cat = this.getSelectedCat();
      cat.clicks++;

      var counter = $('.click-counter');
      counter.text(cat.clicks);
    }
  }

  controller.init();
});
