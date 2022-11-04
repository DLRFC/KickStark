//1. Project(Project Team) will propose a Crowfunding with a roadmap
//2. Whitelisted contributors will be able to send funds to the Crowdfunding contract
//3. Once the Project/Team prove they have done step 1-N you can change Step
//4. Once you change Step, the Team can Withdraw x% of the total fund
//5. If team doesnt deliver, all the investors can withdraw their remaning investment

%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.starknet.common.syscalls import (get_caller_address,get_contract_address)
from starkware.cairo.common.math import assert_le, assert_le_felt, assert_nn_le
from starkware.cairo.common.math import unsigned_div_rem

// @contract_interface
// namespace IERC20{
//      func balanceOf(account : felt) -> (balance : felt){
//      }

//      func transfer(recipient : felt, amount : felt) -> (success : felt){
//      }

//      func transferFrom(sender : felt, recipient : felt, amount : felt) -> (success : felt){
//      }
// }

@storage_var
func whitelist(address:felt) -> (bool:felt){
}

@storage_var
func tokenAddr() -> (res: felt) {
}

@storage_var
func token_balance() -> (res: felt) {
}

@storage_var
func validator() -> (validatorAddress:felt){
}

@storage_var
func current_stage() -> (stageId:felt){
}

@storage_var
func project_status() -> (bool:felt){
}

@storage_var
func max_stage() -> (res:felt){
}

@storage_var
func max_contributors() -> (max_contributors:felt){
}

// @storage_var
// func contributorCounter() -> (contributor_counter:felt){
// }


@storage_var
func contributionValue() -> (res:felt){
}

@storage_var
func initial_total_balance() -> (initial_balance:felt){
}

@storage_var
func funds_balance() -> (total_balance:felt){
}

@storage_var
func total_funds_balance() -> (total_balance:felt){
}

@storage_var
func tokenPrice() -> (token_price: felt) {
}

@storage_var
func project_owner() -> (owner_address: felt) {
}


@storage_var
func owner_balance() -> (owner_balance:felt){
}

@storage_var
func stage_percentage(stage:felt) -> (percentage:felt){
}

@storage_var
func contributor_invested(address:felt) -> (contributed:felt){
}

@storage_var
func contributor_withdrawed(address:felt) -> (withdrawed:felt){
}

@storage_var
func contributor_token_balance(address:felt) -> (balance:felt){
}

@storage_var
func funds_withdraw_value() -> (value:felt){
}

@storage_var
func contributors_counter() -> (count:felt){
}



@constructor

func constructor{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(
    _project_owner:felt, _max_contributors:felt, _max_contribution:felt, _token_address:felt, token_supply:felt, _token_price:felt, roadmap_percentages_len:felt, roadmap_percentages:felt*){

    //Getting caller and contract address
    let (address) = get_caller_address();
    let (kickstark_contract) = get_contract_address();

    //-----Check if sender have balance
    // let (_token_balance) = IERC20.balanceOf(contract_address=_token_address, account=address);

    //---- Assert that is bigger
    // with_attr error_message("Not enough Balance"){
    //     assert _token_balance = token_supply;
    // }

    //-----Transfer IERC20 token for the contract
    //---- Currently not checking ERC20 Token
    // IERC20.transferFrom(contract_address=_token_address, sender=address, recipient=kickstark_contract, amount=token_supply);

    // Max amount of contributions ann Max amount per contribution
    max_contributors.write(_max_contributors);
    contributionValue.write(_max_contribution);

    //Set Token Address, token Price, token balance and Owner address
    tokenAddr.write(_token_address);
    tokenPrice.write(_token_price);
    token_balance.write(token_supply);

    // Define if the owner will be a parameter or contract caller this will be a parameter
    project_owner.write(_project_owner);


    //Set Roadmap Stages and percentages through recursion
    max_stage.write(roadmap_percentages_len);
    // set_roadmap_stages(roadmap_percentages_len=roadmap_percentages_len,roadmap_percentages=roadmap_percentages);
    stage_percentage.write(0,10);
    stage_percentage.write(1,20);
    stage_percentage.write(2,20);
    stage_percentage.write(3,30);
    stage_percentage.write(4,20);
    return();
}


@external
func set_roadmap_stages{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    roadmap_percentages_len:felt, roadmap_percentages:felt*
) {

    if(roadmap_percentages_len == 0){
        stage_percentage.write(0,[roadmap_percentages]);
        return();
    }

    set_roadmap_stages(roadmap_percentages_len=roadmap_percentages_len-1,roadmap_percentages=roadmap_percentages+1);
    stage_percentage.write(roadmap_percentages_len,[roadmap_percentages]);
    return();
}

@external
func addWhitelist{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(input_address:felt){
    let (msgSender) = get_caller_address();
    whitelist.write(input_address, 1);
    contributor_invested.write(msgSender,0);
    return();
}
//Add function to start sale?
@external
func start_project{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    validator_contract:felt
) {
    let (address) = get_caller_address();
    let (owner) = project_owner.read();
    with_attr error_message("Only project owner can call this contract"){
        assert address = owner;
    }
    validator.write(validator_contract);
    project_status.write(1);

    return();
    

}


// modified this function
// perhaps we should make contribution to be flexible, with limitation of minValue needed to contribute
@external
func contribute{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(contribution_value:felt){

    // Check if project funding have started and is in funding Stage
    let (_project_status) = project_status.read();
    with_attr error_message("Project haven't started yet") {
        assert _project_status = 1;
    }

    //Check if project stage is 0
    let (curr_stage) = current_stage.read();

    with_attr error_message("Contribution Stage Closed") {
        assert curr_stage = 0;
    }

    // Check contribution value
    let contribution_value:felt = contributionValue.read();
    with_attr error_message("check if contribution value is correct"){
        assert contribution_value = contribution_value;
    }

    // Check if already contributed
    let msgSender :felt = get_caller_address();
    let current_total:felt = funds_balance.read();
    let hasContributed:felt = contributor_invested.read(msgSender);

    with_attr error_message("Already contributed"){
       assert hasContributed = 0;
    }


    // Check number of contributors
    let current_contributors:felt = contributors_counter.read();
    let _max_contributors:felt = max_contributors.read();

    with_attr error_message("Max contributors reached"){
        // assert current_contributors < _max_contributors;
        assert_le(current_contributors,_max_contributors);
    }

    contributors_counter.write(current_contributors + 1);


    // ----- Transfer funds from contributor
    // let (token_address) = tokenAddr.read();
    // let (address) = get_caller_address();
    // let (kickstark_contract) = get_contract_address();
    // IERC20.transferFrom(contract_address=token_address, sender=address, recipient=kickstark_contract, amount=contribution_value);



    // Set contributor status as investor, withdrawable
    contributor_invested.write(msgSender,1);
    contributor_withdrawed.write(msgSender,0);

    // Set total Contract balance
    funds_balance.write(current_total+contribution_value);
    total_funds_balance.write(current_total+contribution_value);

    let (token_price) = tokenPrice.read();
    let (contribution_value) = contributionValue.read();

    //Should claimable token be in percentage?
    let new_contributor_balance = token_price*contribution_value;
    contributor_token_balance.write(msgSender, token_price*contribution_value);
    //contributor_token_balance.write(new_contributor_balance);
    
    return();
}


// prashant: this function updated this function
// /  1. used project_claim() function
@external
func nextStage{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(){

    //----Implement check if project is in last Stage

    // Checking if caller is validator address
    let address:felt = get_caller_address();
    let validatorAddr : felt = validator.read();

    with_attr error_message("Not Validator"){
        assert address=validatorAddr;
    }

    // Check if project started
    let project_started :felt = project_status.read();
    with_attr error_message("Project is closed"){
        assert project_started = 1;
    }

    // Update Stage
    let currentStage : felt = current_stage.read();
    current_stage.write(currentStage + 1);


    // Get data to update owner_balance
    let stagePercentage : felt = stage_percentage.read(currentStage);
    let current_balance : felt = total_funds_balance.read();
    let difference : felt = current_balance*(stagePercentage/100);

    // Add to owner_balance(Funds that owner can withdraw)

    let current_owner_balance:felt = owner_balance.read();
    let current_funds_balance:felt = funds_balance.read();

    // Safety check of having enough funds_balance before allowing owner to withdraw
    with_attr error_message("not enough funds to withdraw"){
        // assert current_funds_balance != difference;
        assert_le_felt(difference,current_funds_balance);
    }
    funds_balance.write(current_funds_balance - difference);
    owner_balance.write(current_owner_balance + difference);
    return();
}

@external
func closeProject{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(){

    let current_status : felt = project_status.read();

    with_attr error_message("Project already closed"){
        assert current_status = 1;
    }

    // Check if caller is validator
    let msgSender : felt = get_caller_address();
    let owner :felt = validator.read();

    with_attr error_message("Not Validator"){
        assert msgSender = owner;

    }
    project_status.write(0);

    let current_balance : felt= funds_balance.read();
    let total_contributors : felt = contributors_counter.read();
    // Check if there is overflow
    //let value_per_contributor : felt = current_balance/total_contributors;
    let (value_per_contributor, r) = unsigned_div_rem(value=current_balance, div=total_contributors);
    funds_withdraw_value.write(value_per_contributor);
    return();
}

// prashant: implemented this function
// Changed to only transfer based on owner_balance
@external
func project_claim{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
) {
    let (address) = get_caller_address();
    let (owner) = project_owner.read();
    // Check if caller is owner
    with_attr error_message("Not the Project Owner"){
        assert address = owner;
    }
    //Just check if there is balance, if project is open, reduce balance and transfer tokens
    let (ownerBalance) = owner_balance.read();
    with_attr error_message("Dont have any token to withdraw"){
        // assert ownerBalance != 0;
        assert_le(0,ownerBalance);
    }
    owner_balance.write(0);

    //--- Currently not transfering ERC20
    // let (token_address) = tokenAddr.read();
    // IERC20.transfer(contract_address = token_address, recipient=owner, amount=ownerBalance);
    return();
    
}


//Withdraw funds in case of default(project didnt deliver what they proposed)
@external
func contributor_withdraw{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(){

    let project_closed : felt = project_status.read();

    with_attr error_message("Project is still Open"){
        assert project_closed = 0;
    }

    let (address) = get_caller_address();
    let contributorWithdrawed : felt = contributor_withdrawed.read(address);

    with_attr error_message("Already withdrawed"){
        assert contributorWithdrawed = 0;
    }

    contributor_withdrawed.write(address,1);
    let current_balance : felt = funds_balance.read();

    //--- Determine total withdraw value when closing the Contract and then read here
    let withdraw_value : felt = funds_withdraw_value.read();
    let contribution_value : felt = contributionValue.read();
    funds_balance.write(current_balance-withdraw_value);
    //--- Add ERC20 Withdraw


    return();
}


@view
func getStage{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}()->(stage:felt){
    let stageOutput:felt = current_stage.read();
    return(stage = stageOutput);
}

@view
func getTotalBalance{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (total:felt){
    let current_balance : felt = funds_balance.read();
    return(total = current_balance);
}

@view
func getManagerBalance{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (total:felt){
    let ownerBalance : felt = owner_balance.read();
    return(total = ownerBalance);
}

@view
func isOpen{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (bool:felt){
    let is_project_open : felt = project_status.read();
    return(bool = is_project_open);
}

@view
func stagePercentages{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(stage:felt) -> (percentage:felt){
    let current_percentage :felt = stage_percentage.read(stage);
    return(percentage = current_percentage);
}

@view
func haveInvested{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(address:felt) -> (bool:felt){
    let have_invested : felt = contributor_invested.read(address);
    return(bool = have_invested);
}

@view
func haveWithdrawn{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(address:felt) -> (bool :felt){
    let have_withdrawn : felt = contributor_withdrawed.read(address);
    return(bool = have_withdrawn);
}