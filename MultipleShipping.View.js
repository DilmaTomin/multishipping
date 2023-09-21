// @module ERPBuddies.MultipleShipping.MultipleShipping
define('MultipleShipping.View'
	, [
		'erpbuddies_multipleshipping_multipleshipping.tpl'
		, 'Wizard.Module'
		, 'jQuery'
		, 'LiveOrder.Model', 'Profile.Model'
		, 'ERPBuddies.MultipleShipping.MultipleShipping.Model'
	]
	, function (
		erpbuddies_multipleshipping_multipleshipping_tpl
		, WizardModule
		, $
		, LiveOrderModel
		, ProfileModel
		, MultipleShippingModel
	) {
		'use strict';

		return WizardModule.extend({

			template: erpbuddies_multipleshipping_multipleshipping_tpl,
			selectAddress: function (e) {
				if (e) {
					var addressId = $(e.currentTarget).attr("data-id");
					var isChecked = $('#custbody_eb_2nd_shipping_address_arr-' + addressId).prop("checked");

					$("#custbody_eb_2nd_shipping_address option[value='" + addressId + "']").prop("selected", isChecked);
					$("#custbody_eb_2nd_shipping_address option[value='" + addressId + "']").attr("selected", isChecked);
					$("#custbody_eb_2nd_shipping_address").trigger("change");

					// var model = LiveOrderModel.getInstance();

					this.render();
				}

			},
			deleteAddress: function (e) {
				var addressId = $(e.currentTarget).attr("data-id");
				$(".address-details-action[data-action='remove'][data-id='" + addressId + "']").click();
			},
			updateAddress: function (e) {
				var addressId = $(e.currentTarget).attr("data-id");
				$(".address-details-action[data-action='edit-address'][data-id='" + addressId + "']").click();
			},
			events: {
				'click input[name="custbody_eb_2nd_shipping_address_arr"]': 'selectAddress',
				'click .address-details-action[data-action="remove-custom"]': 'deleteAddress',
				'click .address-details-action[data-action="edit-address-custom"]': 'updateAddress',
			}
			, getContext: function getContext(container) {



				var addresses = this.wizard.profileModel.attributes.addresses.models;

				var model = LiveOrderModel.getInstance();

				var liveorder = model.attributes;
				var selectedAddresses = liveorder.options.custbody_eb_2nd_shipping_address;
				console.log("selectedAddresses", selectedAddresses.length)
				//console.log('lines');
				var lines = liveorder.lines.models;
				//console.log(lines);

				if (selectedAddresses.length > 0) {
					$(".order-wizard-step-button-continue").prop('disabled', false);

					for (var i = 0; i < selectedAddresses.length; i++) {
						//lines[i].attributes.quantity = lines[i].attributes.quantity * selectedAddresses.length;
						//$('#custbody_eb_2nd_shipping_address_arr'+selectedAddresses[i]).attr('checked',true);
					}
				}
				else {
					$(".order-wizard-step-button-continue").prop('disabled', true);
				}


				// model.set(model.attributes);

				// model.trigger('change');


				var addressesParsed = [];

				for (var i = 0; i < addresses.length; i++) {
					var addressData = addresses[i].attributes;

					if(selectedAddresses.indexOf(addressData.internalid)!=-1)
					{
						addressData.isSelected = true;

					}
					else
					{
						addressData.isSelected = false;
					}

					addressesParsed.push(addressData);

				}
				$(document).ready(function () {
					if (window.location.href.includes('#shipping')) {
						console.log("shipping")
						$('#wizard-step-content').css("display", "none")
					}
				});
				this.profileModel = ProfileModel.getInstance();
				this.collection = this.profileModel.get('addresses');
				this.collection.on(
					'reset sync add remove change destroy',
					function () {
						this.render();
					},
					this
				);
				return {
					isReview: this.step.step_url == 'review',
					hasAddress: addressesParsed.length ? true : false,
					hasSelecedAddress: selectedAddresses.length ? true : false,
					addresses: addressesParsed
				};
			}
		});
	});
