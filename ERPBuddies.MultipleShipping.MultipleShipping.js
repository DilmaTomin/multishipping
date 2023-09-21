
define(
	'ERPBuddies.MultipleShipping.MultipleShipping'
	, [
		'MultipleShipping.View',
		'jQuery',
		'OrderWizard.Module.PaymentMethod.Selector'
	]
	, function (
		MultipleShippingView,
		$,
		PaymentSelector
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var checkout = container.getComponent('Checkout');
				var userProfile = container.getComponent('UserProfile');
				// console.log(checkout.getCurrentStep().done());
				// checkout.getStepsInfo().done(function (step) {
				// 	console.log(step)
				// });
				var cart = container.getComponent('Cart');
				cart.on('afterUpdateLine', function(cart){
					alert('updated!');
				});



				if (checkout) {
					userProfile.getUserProfile().done(function (profile) {
						
						var addresses = profile.addresses
						var balance = profile.balance;
						var isGuest = profile.isguest;

						
						
						if (!isGuest && addresses.length) {
							// setTimeout(function(){
							// 	$(".order-wizard-paymentmethod-selector-module-button-group").hide();
							// }, 1000);

							if (checkout) {
								checkout.addModuleToStep({
									step_url: 'shipping/address',
									module: {
										id: 'MultipleShippingView',
										index: 1,
										classname: 'MultipleShipping.View',
										options: { container: '#wizard-step-content-custom' }
									}
								});

								checkout.addModuleToStep({
									step_url: 'review',
									module: {
										id: 'MultipleShippingView',
										index: 0,
										classname: 'MultipleShipping.View',
										options: { container: '.order-wizard-showshipments-module-shipping-details-body' }
									}
								});
							}
						}


					});
				}

			}
		};
	});
