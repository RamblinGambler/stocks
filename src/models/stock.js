(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
      this.set({price: parseFloat(newPrice)});
      console.log('Updating', this.get('name'), 'price to:', this.get('price'));
    }
  });

})();
