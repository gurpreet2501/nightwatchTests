var plan_id = 0;

function set_plan_id(planID){
      plan_id = planID;
}

function get_plan_id(){
      return plan_id;
}


module.exports = {
  'Realtor Flow' : function (browser) {

    browser
      // .url('http://fixt.com/order/success/?order_id=1129');
      .url('http://fixt.com');
      browser.waitForElementVisible('body', 3000)
      .waitForElementVisible('.menu-real-estate-pro', 3000)
      .click('.menu-real-estate-pro a')
      .assert.containsText('.submit-button', 'Order a Plan')
      .click('.home-owner-submit')
      .waitForElementVisible("#signup_step", 3000)
      .assert.containsText('h6', "Where do you want coverage?")
      .setValue('#pac-input', '123 Highland village drive')
      .waitForElementVisible("div.pac-container.pac-logo div.pac-item", 3000)
      .click('div.pac-container.pac-logo div.pac-item')
      .waitForElementVisible("#continue_div > button",3000)
      .click('#continue_div > button')

      //Select Plan
      .waitForElementVisible("input[name=plan_3]", 3000)
      .click("input[name=plan_3]")

      //Select Addons 
      .waitForElementVisible(".add_cover_class", 3000)
      .click(".add_cover_class")
      .waitForElementVisible("#continue_div > button", 3000)
      .click("#continue_div > button");

      var randNo = Math.floor(Math.random() * 1000000);

       //Customer signup 
      browser.waitForElementVisible("#signup_step", 600*10)
      .waitForElementVisible("#continue_div > button", 4000)
      .setValue('input[name=contact_info\\[first_name\\]]', 'Gurpreet')
      .setValue('input[name=contact_info\\[last_name\\]]', 'Singh')
      .setValue('input[name=contact_info\\[email\\]]', 'gurpreet2501+'+randNo+'@gmail.com')
      .setValue('input[name=contact_info\\[phone\\]]', randNo)
      .click("#continue_div > button")

      // Select Agent Type as Realtor Agent
      .waitForElementVisible("#row_items > li:nth-child(1) > div > label", 4000)
      .waitForElementVisible("#continue_div > button", 4000)
      .click("#continue_div > button")

      //Realtor Agent signup
      .assert.containsText('#signup_step > h6', "Please confirm the information below is correct or edit as needed.")
      .waitForElementVisible("#continue_div > button", 4000)
      .setValue('input[name=realtor_info\\[profile\\]\\[real_estate_license\\]]', 'RE-'+randNo)
      .setValue('input[name=realtor_info\\[profile\\]\\[company\\]]', 'Fixd')
      .setValue('input[name=realtor_info\\[profile\\]\\[firstname\\]]', 'Gurpreet')
      .setValue('input[name=realtor_info\\[profile\\]\\[lastname\\]]', 'Singh')
      .setValue('input[name=realtor_info\\[user\\]\\[email\\]]', 'realtor+'+randNo+'@gmail.com')
      .setValue('input[name=realtor_info\\[profile\\]\\[address\\]]', '123 Highland village drive')
      .setValue('input[name=realtor_info\\[profile\\]\\[city\\]]', 'Highland village')
      .setValue('input[name=realtor_info\\[profile\\]\\[state\\]]', 'Tx')
      .setValue('input[name=realtor_info\\[profile\\]\\[zip\\]]', '75076')
      .setValue('input[name=realtor_info\\[user\\]\\[password\\]]', 'passw0rd')
      .setValue('input[name=realtor_info\\[password2\\]]', 'passw0rd')
      .click("#continue_div > button")

      //Last Step
      browser.assert.containsText('#signup_step > h1', "Last Step")
      .setValue('input[name=contact_full_name]', 'Gurpreet Singh')
      .setValue('input[name=title_company_name]', 'Agsoft')
      .setValue('input[name=title_company_email]', 'fixd+'+randNo+'@gmail.com')
      .click('input[name="pay_by_invoice"]')

      //Summary Page
      .waitForElementVisible(".orange_button", 4000)
      .click(".orange_button");
      
      //Success Page
      browser.waitForElementVisible("#signup_step > h1 > span.orange", 4000);
      browser.getText('.orderNo', function(result){
         plan_id =  result.value;
   
      });
      
      //Complete Realtor order flow
      browser.url('http://fixt.com/title-agent/orderNumber')
      .waitForElementVisible("#continue_div > button", 4000)
      .setValue('input[name=order_number]','',function(){
            this.setValue('input[name=order_number]',plan_id)
      })
      .click("#continue_div > button")
      .assert.containsText('#signup_step > h1', "Confirm Escrow/Title Agent Info.")
      .waitForElementVisible("#continue_div > button", 4000)
      .setValue('input[name=title_agent\\[profile\\]\\[lid\\]]', 'Fixd-'+randNo)
      .setValue('input[name=title_agent\\[profile\\]\\[title_company\\]]', 'TC-'+randNo)
      .setValue('input[name=title_agent\\[profile\\]\\[first_name\\]]', 'Gurpreet')
      .setValue('input[name=title_agent\\[profile\\]\\[last_name\\]]', 'Singh')
      .setValue('input[name=title_agent\\[user\\]\\[email\\]]', 'gurpreet+'+randNo+'@gmail.com')
      .setValue('input[name=title_agent\\[profile\\]\\[office_phone\\]]', randNo*12)
      .setValue('input[name=title_agent\\[profile\\]\\[address\\]]', '123 highland village drive')
      .setValue('input[name=title_agent\\[profile\\]\\[city\\]]', 'highland village')
      .setValue('input[name=title_agent\\[profile\\]\\[state\\]]', 'Tx')
      .setValue('input[name=title_agent\\[profile\\]\\[zip\\]]', '75077')
      .setValue('input[name=title_agent\\[user\\]\\[password\\]]', 'passw0rd')
      .setValue('input[name=title_agent\\[password2\\]]', 'passw0rd')
      .click("#continue_div > button")

      //Order Summary Page
      .waitForElementVisible(".orange_button", 4000)
      .click(".orange_button")
      .waitForElementVisible("#signup_step > h1", 4000)
      .assert.containsText('#signup_step > h1', "CONGRATULATIONS!")
      browser.end();


  } 
};


