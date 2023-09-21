<div id="order-wizard-address-module" class="order-wizard-address-module">
  <div class="order-wizard-address-module-show-addresses-container">
    <h3 class="summary-title">
      Shipping Details
    </h3>
    <div id="order-wizard-address-module-placeholder" data-manage="shipaddress"
      class="order-wizard-address-module-list-placeholder">
      <div class="order-wizard-address-module-address-container">
        {{#if isReview}}
        {{#each addresses}}
          {{#if this.isSelected}}
            <div class="order-wizard-address-row">
              <div class="order-wizard-address-cell">
                <div class="location">
                  <g transform="matrix(1 0 0 1 118 444)" class="stencil"><svg width="50" height="50" x="0.5" y="0.5"
                      class="stencil--easier-to-select" style="opacity:1;">
                      <defs></defs>
                      <rect x="0" y="0" width="50" height="50" fill="transparent" class="stencil__selection-helper">
                      </rect>
                      <style>
                        #mq-stencil-icon-4aea37cf * {
                          vector-effect: non-scaling-size;
                        }
                      </style>
                      <g id="mq-stencil-icon-4aea37cf" fill="rgb(0,0,0)" stroke-width="0" stroke="none"
                        stroke-dasharray="none"><svg preserveAspectRatio="none" width="100%" viewBox="0 0 24 24"
                          height="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7
                            13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7
                            9c0-2.76 2.24-5 5-5s5 2.24 5 5c0
                            2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85
                            7 9z"></path>
                          <circle r="2.5" cy="9" cx="12"></circle>
                        </svg></g>
                    </svg></g>
                  <div class="location-content">
                    <div class="title-container">
                      <h3 class="title">{{this.fullname}}</h3>
                      <!-- <div class="default-badge"></div> -->
                    </div><span class="description">
                      {{this.addr1}}, {{this.city}}, {{this.state}}, {{this.zip}}, {{this.country}}, {{this.phone}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          {{/if}}
          {{/each}}
          <script>
            $(".order-wizard-showshipments-module-shipping-title").hide();
            $(".order-wizard-showshipments-module-shipping-details-address").hide();
          </script>
        {{else}}
        {{#each addresses}}
          <div class="order-wizard-address-row">
            <div class="order-wizard-address-cell">
              <div class="location">
                <g transform="matrix(1 0 0 1 118 444)" class="stencil"><svg width="50" height="50" x="0.5" y="0.5"
                    class="stencil--easier-to-select" style="opacity:1;">
                    <defs></defs>
                    <rect x="0" y="0" width="50" height="50" fill="transparent" class="stencil__selection-helper">
                    </rect>
                    <style>
                      #mq-stencil-icon-4aea37cf * {
                        vector-effect: non-scaling-size;
                      }
                    </style>
                    <g id="mq-stencil-icon-4aea37cf" fill="rgb(0,0,0)" stroke-width="0" stroke="none"
                      stroke-dasharray="none"><svg preserveAspectRatio="none" width="100%" viewBox="0 0 24 24"
                        height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7
                          13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7
                          9c0-2.76 2.24-5 5-5s5 2.24 5 5c0
                          2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85
                          7 9z"></path>
                        <circle r="2.5" cy="9" cx="12"></circle>
                      </svg></g>
                  </svg></g>
                <div class="location-content">
                  <div class="title-container">
                    <h3 class="title">{{this.fullname}}</h3>
                    <!-- <div class="default-badge"></div> -->
                  </div><span class="description">
                    {{this.addr1}}, {{this.city}}, {{this.state}}, {{this.zip}}, {{this.country}}, {{this.phone}}
                  </span>
                </div>
                <!-- <a class="address-selector"> -->
                <input id="custbody_eb_2nd_shipping_address_arr-{{this.internalid}}" {{#if this.isSelected}}checked{{/if}}
                  class="custbody_eb_2nd_shipping_address_arr checkbox-round" type="checkbox"
                  name="custbody_eb_2nd_shipping_address_arr" data-id={{this.internalid}} value="{{this.internalid}}">
                <!-- </a> -->
                <div></div>
                
                  <p class="address-details-actions">
                    <a class="address-details-action address-details-action-primary"
                      href="/addressbook/{{this.internalid}}" data-action="edit-address" data-id="{{this.internalid}}"
                      data-toggle="show-in-modal">
                      Update
                    </a>
                    <a class="address-details-action" data-action="remove-copy" data-id="{{this.internalid}}">
                      Delete
                    </a>
                  </p>

              </div>
            </div>
          </div>
          {{/each}}
          <select name="custbody_eb_2nd_shipping_address" id="custbody_eb_2nd_shipping_address" multiple>
            {{#each addresses}}
            <option value="{{this.internalid}}" {{#if this.isSelected}}selected{{/if}}>{{this.internalid}}</option>
            {{/each}}
          </select>
        {{/if}}
      </div>
    </div>
  </div>
</div>
{{#unless isReview}}
<div class="multiple-order-disclosure-section"><span class="multiple-order-disclosure">A duplicate order for each
    location will be generated and shipped if multiple locations are selected.</span></div>
{{/unless}}
<script>
  $(".order-wizard-address-module").hide();
  $("#order-wizard-address-module").show();
</script>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->