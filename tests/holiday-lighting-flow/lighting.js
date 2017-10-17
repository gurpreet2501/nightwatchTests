module.exports = {
  'Holiday Lighting Flow' : function (browser) {
     var randNo = Math.floor(Math.random() * 1000000);
      browser.url('http://fixt.com')
      .waitForElementVisible('body', 3000)
      .waitForElementVisible("#video_side_content > div > div:nth-child(2) > a > button", 3000)
      .click("#video_side_content > div > div:nth-child(2) > a > button")
      .assert.containsText('h6', "Where do you want coverage?")
      .setValue('#pac-input', '123 Highland village drive')
      .waitForElementVisible("div.pac-container.pac-logo div.pac-item", 3000)
      .click('div.pac-container.pac-logo div.pac-item')
      .waitForElementVisible(".address-submit",3000)
      .pause(2000)
      .click('.address-submit')

       //Customer signup 
      .waitForElementVisible("#signup_step", 600*10)
      .waitForElementVisible("#continue_div > button", 4000)
      .setValue('input[name=contact_info\\[first_name\\]]', 'Gurpreet')
      .setValue('input[name=contact_info\\[last_name\\]]', 'Singh')
      .setValue('input[name=contact_info\\[email\\]]', 'gurpreet2501+'+randNo+'@gmail.com')
      .setValue('input[name=contact_info\\[phone\\]]', randNo)
      .setValue('input[name=contact_info\\[password\\]]', 'passw0rd')
      .setValue('input[name=contact_info\\[password2\\]]', 'passw0rd')
      .click("#continue_div > button")

      // // Select Agent Type as Realtor Agent
      // .waitForElementVisible("#row_items > li:nth-child(1) > div > label", 4000)
      // .waitForElementVisible("#continue_div > button", 4000)
      // .click("#continue_div > button")

      // //Realtor Agent signup
      // .assert.containsText('#signup_step > h6', "Please confirm the information below is correct or edit as needed.")
      // .waitForElementVisible("#continue_div > button", 4000)
      // .setValue('input[name=realtor_info\\[profile\\]\\[real_estate_license\\]]', 'RE-'+randNo)
      // .setValue('input[name=realtor_info\\[profile\\]\\[company\\]]', 'Fixd')
      // .setValue('input[name=realtor_info\\[profile\\]\\[firstname\\]]', 'Gurpreet')
      // .setValue('input[name=realtor_info\\[profile\\]\\[lastname\\]]', 'Singh')
      // .setValue('input[name=realtor_info\\[user\\]\\[email\\]]', 'realtor+'+randNo+'@gmail.com')
      // .setValue('input[name=realtor_info\\[profile\\]\\[address\\]]', '123 Highland village drive')
      // .setValue('input[name=realtor_info\\[profile\\]\\[city\\]]', 'Highland village')
      // .setValue('input[name=realtor_info\\[profile\\]\\[state\\]]', 'Tx')
      // .setValue('input[name=realtor_info\\[profile\\]\\[zip\\]]', '75076')
      // .setValue('input[name=realtor_info\\[user\\]\\[password\\]]', 'passw0rd')
      // .setValue('input[name=realtor_info\\[password2\\]]', 'passw0rd')
      // .click("#continue_div > button")

      // //Last Step
      // browser.assert.containsText('#signup_step > h1', "Last Step")
      // .setValue('input[name=contact_full_name]', 'Gurpreet Singh')
      // .setValue('input[name=title_company_name]', 'Agsoft')
      // .setValue('input[name=title_company_email]', 'fixd+'+randNo+'@gmail.com')
      // .click('input[name="pay_by_invoice"]')

      // //Summary Page
      // .waitForElementVisible(".orange_button", 4000)
      // .click(".orange_button");
      
      // //Success Page
      // browser.waitForElementVisible("#signup_step > h1 > span.orange", 4000);
      // browser.getText('.orderNo', function(result){
      //    plan_id =  result.value;
   
      // });
      
      // //Complete Realtor order flow
      // browser.url('http://fixt.com/title-agent/orderNumber')
      // .waitForElementVisible("#continue_div > button", 4000)
      // .setValue('input[name=order_number]','',function(){
      //       this.setValue('input[name=order_number]',plan_id)
      // })
      // .click("#continue_div > button")
      // .assert.containsText('#signup_step > h1', "Confirm Escrow/Title Agent Info.")
      // .waitForElementVisible("#continue_div > button", 4000)
      // .setValue('input[name=title_agent\\[profile\\]\\[lid\\]]', 'Fixd-'+randNo)
      // .setValue('input[name=title_agent\\[profile\\]\\[title_company\\]]', 'TC-'+randNo)
      // .setValue('input[name=title_agent\\[profile\\]\\[first_name\\]]', 'Gurpreet')
      // .setValue('input[name=title_agent\\[profile\\]\\[last_name\\]]', 'Singh')
      // .setValue('input[name=title_agent\\[user\\]\\[email\\]]', 'gurpreet+'+randNo+'@gmail.com')
      // .setValue('input[name=title_agent\\[profile\\]\\[office_phone\\]]', randNo*12)
      // .setValue('input[name=title_agent\\[profile\\]\\[address\\]]', '123 highland village drive')
      // .setValue('input[name=title_agent\\[profile\\]\\[city\\]]', 'highland village')
      // .setValue('input[name=title_agent\\[profile\\]\\[state\\]]', 'Tx')
      // .setValue('input[name=title_agent\\[profile\\]\\[zip\\]]', '75077')
      // .setValue('input[name=title_agent\\[user\\]\\[password\\]]', 'passw0rd')
      // .setValue('input[name=title_agent\\[password2\\]]', 'passw0rd')
      // .click("#continue_div > button")

      // //Order Summary Page
      // .waitForElementVisible(".orange_button", 4000)
      // .click(".orange_button")
      // .waitForElementVisible("#signup_step > h1", 4000)
      // .assert.containsText('#signup_step > h1', "CONGRATULATIONS!")
      // browser.end();


  } 
};


