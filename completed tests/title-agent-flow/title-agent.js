var plan_id = 0;

function set_plan_id(planID){
      plan_id = planID;
}

function get_plan_id(){
      return plan_id;
}


module.exports = {
  'Title Agent Flow' : function (browser) {

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
      // .assert.containsText('#signup_step > h6', "Please confirm the information below is correct or edit as needed.")
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
      .click("#continue_div > button");

      // Select Agent Type as Realtor Agent
      browser.assert.containsText('#signup_step > h6', "Are you ordering as a Realtor or Title Agent?")
      .waitForElementVisible("#row_items > li:nth-child(2) > div", 8000)
      .click("#row_items > li:nth-child(2) > div")
      .waitForElementVisible("#continue_div > button", 4000)
      .click("#continue_div > button")
      .assert.containsText('#signup_step > h1', "Confirm Escrow/Title Agent Info.")
      

      // Title Agent signup
      .waitForElementVisible("#continue_div > button", 4000)
      .setValue('input[name=user\\[profile\\]\\[lid\\]]', 'Fixd-'+randNo)
      .setValue('input[name=user\\[profile\\]\\[title_company\\]]', 'TC-'+randNo)
      .setValue('input[name=user\\[profile\\]\\[first_name\\]]', 'Gurpreet')
      .setValue('input[name=user\\[profile\\]\\[last_name\\]]', 'Singh')
      .setValue('input[name=user\\[user\\]\\[email\\]]', 'gurpreet+'+randNo+'@gmail.com')
      .setValue('input[name=user\\[profile\\]\\[phone\\]]', randNo*12)
      .setValue('input[name=user\\[profile\\]\\[address\\]]', '123 highland village drive')
      .setValue('input[name=user\\[profile\\]\\[city\\]]', 'highland village')
      .setValue('input[name=user\\[profile\\]\\[state\\]]', 'Tx')
      .setValue('input[name=user\\[profile\\]\\[zip\\]]', '75077')
      .setValue('input[name=user\\[user\\]\\[password\\]]', 'passw0rd')
      .setValue('input[name=user\\[password2\\]]', 'passw0rd')
      .click("#continue_div > button")

      //Realtor Signup
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

      //Summary Page
      .waitForElementVisible(".orange_button", 4000)
      .click(".orange_button");
      
      //Success Page
      browser.waitForElementVisible("#signup_step > h1 > span.orange", 4000)
      .end();

  } 
};


