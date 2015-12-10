var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {

  $scope.weights = {
        numBranchLocations: 0,
        branchLocalDistributions: 0,
        onlineBanking: 0,
        outsideATMFee: 0,
        checkingAccountFees: 0,
        savingAccountFees: 0,
        overdraftPractices: 0,
        overdraftThresholdsLimits: 0,
        creditCards: 0,
        creditCardsFees: 0,
        loanOrigMarketshare: 0,
        loanAccNYstate: 0,
        loanAccLatino: 0,
        loanAccBlack: 0,
        loanAccLowMod: 0,
        percentageLowAndMod: 0,
        loanAccLowModCom: 0,
        percentageComOfColor: 0,
        accOfAltID: 0,
        costWireTranfers: 0  
  };
    
  $scope.calculateTotal = function() {
    $scope.total = 0;
    for (var weight in $scope.weights) {
      $scope.total += parseInt($scope.weights[weight]);
    }
    return $scope.total;
  };

  var bankInfo = [{
    bankName: 'bankOfAmerica',
    bankRatings: {        
        numBranchLocations: 5,
        branchLocalDistributions: 4,
        onlineBanking: 5,
        outsideATMFee: 2,
        checkingAccountFees: 5,
        savingAccountFees: 4,
        overdraftPractices: 3,
        overdraftThresholdsLimits: 4,
        creditCards: 4,
        creditCardsFees: 2,
        loanOrigMarketshare: 4,
        loanAccNYstate: 1,
        loanAccLatino: 2,
        loanAccBlack: 2,
        loanAccLowMod: 1,
        percentageLowAndMod: 2,
        loanAccLowModCom: 1,
        percentageComOfColor: 2,
        accOfAltID: 2,
        costWireTranfers: 4              
        
    }
  }, {
    bankName: 'HSBC',
    bankRatings: {
        numBranchLocations: 3,
        branchLocalDistributions: 4,
        onlineBanking: 2,
        outsideATMFee: 2,
        checkingAccountFees: 2,
        savingAccountFees: 5,
        overdraftPractices: 3,
        overdraftThresholdsLimits: 4,
        creditCards: 4,
        creditCardsFees: 1,
        loanOrigMarketshare: 4,
        loanAccNYstate: 1,
        loanAccLatino: 1,
        loanAccBlack: 1,
        loanAccLowMod: 1,
        percentageLowAndMod: 1,
        loanAccLowModCom: 1,
        percentageComOfColor: 2,
        accOfAltID: 3,
        costWireTranfers: 5               
        
    }
  },
   {
    bankName: 'santander',
    bankRatings: {
        numBranchLocations: 1,
        branchLocalDistributions: 3,
        onlineBanking: 1,
        outsideATMFee: 1,
        checkingAccountFees: 3,
        savingAccountFees: 3,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 4,
        creditCards: 3,
        creditCardsFees: 4,
        loanOrigMarketshare: 3,
        loanAccNYstate: 4,
        loanAccLatino: 4,
        loanAccBlack: 4,
        loanAccLowMod: 3,
        percentageLowAndMod: 1,
        loanAccLowModCom: 4,
        percentageComOfColor: 2,
        accOfAltID: 2,
        costWireTranfers: 4               
        
    }
  },
   {
    bankName: 'JP_morgan_chase',
    bankRatings: {
        numBranchLocations: 5,
        branchLocalDistributions: 4,
        onlineBanking: 5,
        outsideATMFee: 2,
        checkingAccountFees: 3,
        savingAccountFees: 4,
        overdraftPractices: 3,
        overdraftThresholdsLimits: 5,
        creditCards: 3,
        creditCardsFees: 2,
        loanOrigMarketshare: 5,
        loanAccNYstate: 3,
        loanAccLatino: 3,
        loanAccBlack: 3,
        loanAccLowMod: 3,
        percentageLowAndMod: 1,
        loanAccLowModCom: 3,
        percentageComOfColor: 3,
        accOfAltID: 3,
        costWireTranfers: 4           
        
    }
  },
  {
    bankName: 'citibank',
    bankRatings: {
       numBranchLocations: 4,
        branchLocalDistributions: 4,
        onlineBanking: 5,
        outsideATMFee: 2,
        checkingAccountFees: 5,
        savingAccountFees: 2,
        overdraftPractices: 4,
        overdraftThresholdsLimits: 4,
        creditCards: 4,
        creditCardsFees: 4,
        loanOrigMarketshare: 5,
        loanAccNYstate: 4,
        loanAccLatino: 3,
        loanAccBlack: 3,
        loanAccLowMod: 3,
        percentageLowAndMod: 1,
        loanAccLowModCom: 3,
        percentageComOfColor: 3,
        accOfAltID: 2,
        costWireTranfers: 4               
        
    }
  },
   {
    bankName: 'capitalone',
    bankRatings: {
        numBranchLocations: 5,
        branchLocalDistributions: 3,
        onlineBanking: 5,
        outsideATMFee: 5,
        checkingAccountFees: 4,
        savingAccountFees: 5,
        overdraftPractices: 4,
        overdraftThresholdsLimits: 5,
        creditCards: 1,
        creditCardsFees: 4,
        loanOrigMarketshare: 2,
        loanAccNYstate: 1,
        loanAccLatino: 2,
        loanAccBlack: 2,
        loanAccLowMod: 2,
        percentageLowAndMod: 5,
        loanAccLowModCom: 2,
        percentageComOfColor: 3,
        accOfAltID: 1,
        costWireTranfers: 4              
        
    }
  },               
   {
    bankName: 'keybank',
    bankRatings: {
       numBranchLocations: 4,
        branchLocalDistributions: 3,
        onlineBanking: 4,
        outsideATMFee: 2,
        checkingAccountFees: 5,
        savingAccountFees: 4,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 1,
        creditCards: 4,
        creditCardsFees: 4,
        loanOrigMarketshare: 3,
        loanAccNYstate: 2,
        loanAccLatino: 3,
        loanAccBlack: 2,
        loanAccLowMod: 2,
        percentageLowAndMod: 8,
        loanAccLowModCom: 2,
        percentageComOfColor: 1,
        accOfAltID: 1,
        costWireTranfers: 4               
        
    }
  },    
   {
    bankName: 'mAndt',
    bankRatings: {
       numBranchLocations: 4,
        branchLocalDistributions: 2,
        onlineBanking: 2,
        outsideATMFee: 1,
        checkingAccountFees: 4,
        savingAccountFees: 1,
        overdraftPractices: 3,
        overdraftThresholdsLimits: 2,
        creditCards: 5,
        creditCardsFees: 4,
        loanOrigMarketshare: 4,
        loanAccNYstate: 5,
        loanAccLatino: 5,
        loanAccBlack: 5,
        loanAccLowMod: 5,
        percentageLowAndMod: 5,
        loanAccLowModCom: 5,
        percentageComOfColor: 1,
        accOfAltID: 1,
        costWireTranfers: 1               
        
    }
  },
   {
    bankName: 'tdbank',
    bankRatings: {
       numBranchLocations: 4,
        branchLocalDistributions: 2,
        onlineBanking: 3,
        outsideATMFee: 1,
        checkingAccountFees: 3,
        savingAccountFees: 4,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 3,
        creditCards: 4,
        creditCardsFees: 4,
        loanOrigMarketshare: 3,
        loanAccNYstate: 2,
        loanAccLatino: 2,
        loanAccBlack: 2,
        loanAccLowMod: 1,
        percentageLowAndMod: 1,
        loanAccLowModCom: 2,
        percentageComOfColor: 2,
        accOfAltID: 2,
        costWireTranfers: 4               
        
    }
  },
    {
    bankName: 'firstniagara',
    bankRatings: {
       numBranchLocations: 3,
        branchLocalDistributions: 4,
        onlineBanking: 2,
        outsideATMFee: 2,
        checkingAccountFees: 2,
        savingAccountFees: 4,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 3,
        creditCards: 5,
        creditCardsFees: 5,
        loanOrigMarketshare: 4,
        loanAccNYstate: 5,
        loanAccLatino: 5,
        loanAccBlack: 5,
        loanAccLowMod: 5,
        percentageLowAndMod: 5,
        loanAccLowModCom: 5,
        percentageComOfColor: 1,
        accOfAltID: 4,
        costWireTranfers: 4               
        
    }
  },  
  {
    bankName: 'communitybank',
    bankRatings: {
       numBranchLocations: 3,
        branchLocalDistributions: 1,
        onlineBanking: 1,
        outsideATMFee: 3,
        checkingAccountFees: 2,
        savingAccountFees: 5,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 3,
        creditCards: 5,
        creditCardsFees: 2,
        loanOrigMarketshare: 2,
        loanAccNYstate: 5,
        loanAccLatino: 4,
        loanAccBlack: 5,
        loanAccLowMod: 5,
        percentageLowAndMod: 5,
        loanAccLowModCom: 5,
        percentageComOfColor: 1,
        accOfAltID: 2,
        costWireTranfers: 2               
        
    }
  },  
  {
    bankName: 'NYcommunityAndCommercial',
    bankRatings: {
       numBranchLocations: 3,
        branchLocalDistributions: 3,
        onlineBanking: 1,
        outsideATMFee: 2,
        checkingAccountFees: 4,
        savingAccountFees: 3,
        overdraftPractices: 1,
        overdraftThresholdsLimits: 1,
        creditCards: 1,
        creditCardsFees: 1,
        loanOrigMarketshare: 2,
        loanAccNYstate: 4,
        loanAccLatino: 4,
        loanAccBlack: 4,
        loanAccLowMod: 4,
        percentageLowAndMod: 1,
        loanAccLowModCom: 3,
        percentageComOfColor: 2,
        accOfAltID: 1,
        costWireTranfers: 3               
        
    }
  },
  {
    bankName: 'nbt',
    bankRatings: {
       numBranchLocations: 2,
        branchLocalDistributions: 2,
        onlineBanking: 5,
        outsideATMFee: 5,
        checkingAccountFees: 4,
        savingAccountFees: 5,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 2,
        creditCards: 5,
        creditCardsFees: 1,
        loanOrigMarketshare: 1,
        loanAccNYstate: 3,
        loanAccLatino: 4,
        loanAccBlack: 5,
        loanAccLowMod: 3,
        percentageLowAndMod: 3,
        loanAccLowModCom: 2,
        percentageComOfColor: 1,
        accOfAltID: 1,
        costWireTranfers: 3               
        
    }
  },    
  {
    bankName: 'citizensbank',
    bankRatings: {
       numBranchLocations: 3,
        branchLocalDistributions: 2,
        onlineBanking: 2,
        outsideATMFee: 1,
        checkingAccountFees: 3,
        savingAccountFees: 4,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 1,
        creditCards: 4,
        creditCardsFees: 1,
        loanOrigMarketshare: 3,
        loanAccNYstate: 3,
        loanAccLatino: 4,
        loanAccBlack: 4,
        loanAccLowMod: 3,
        percentageLowAndMod: 3,
        loanAccLowModCom: 3,
        percentageComOfColor: 1,
        accOfAltID: 2,
        costWireTranfers: 5               
        
    }
  },      
  {
    bankName: 'trustCO',
    bankRatings: {
       numBranchLocations: 2,
        branchLocalDistributions: 2,
        onlineBanking: 1,
        outsideATMFee: 3,
        checkingAccountFees: 2,
        savingAccountFees: 4,
        overdraftPractices: 1,
        overdraftThresholdsLimits: 4,
        creditCards: 1,
        creditCardsFees: 1,
        loanOrigMarketshare: 3,
        loanAccNYstate: 4,
        loanAccLatino: 5,
        loanAccBlack: 3,
        loanAccLowMod: 4,
        percentageLowAndMod: 2,
        loanAccLowModCom: 4,
        percentageComOfColor: 1,
        accOfAltID: 4,
        costWireTranfers: 4               
        
    }
  }, 
     {
    bankName: 'astoriabank',
    bankRatings: {
       numBranchLocations: 2,
        branchLocalDistributions: 2,
        onlineBanking: 3,
        outsideATMFee: 3,
        checkingAccountFees: 3,
        savingAccountFees: 2,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 4,
        creditCards: 5,
        creditCardsFees: 2,
        loanOrigMarketshare: 2,
        loanAccNYstate: 4,
        loanAccLatino: 4,
        loanAccBlack: 5,
        loanAccLowMod: 5,
        percentageLowAndMod: 3,
        loanAccLowModCom: 4,
        percentageComOfColor: 2,
        accOfAltID: 2,
        costWireTranfers: 5               
        
    }
  },  
    {
    bankName: 'wellsfargo',
    bankRatings: {
       numBranchLocations: 1,
        branchLocalDistributions: 1,
        onlineBanking: 2,
        outsideATMFee: 2,
        checkingAccountFees: 3,
        savingAccountFees: 1,
        overdraftPractices: 3,
        overdraftThresholdsLimits: 4,
        creditCards: 1,
        creditCardsFees: 1,
        loanOrigMarketshare: 5,
        loanAccNYstate: 4,
        loanAccLatino: 4,
        loanAccBlack: 4,
        loanAccLowMod: 3,
        percentageLowAndMod: 1,
        loanAccLowModCom: 3,
        percentageComOfColor: 2,
        accOfAltID: 2,
        costWireTranfers: 5               
        
    }
  },
   {
    bankName: 'applebank',
    bankRatings: {
       numBranchLocations: 1,
        branchLocalDistributions: 5,
        onlineBanking: 1,
        outsideATMFee: 3,
        checkingAccountFees: 3,
        savingAccountFees: 3,
        overdraftPractices: 1,
        overdraftThresholdsLimits: 2,
        creditCards: 3,
        creditCardsFees: 2,
        loanOrigMarketshare: 1,
        loanAccNYstate: 2,
        loanAccLatino: 2,
        loanAccBlack: 4,
        loanAccLowMod: 1,
        percentageLowAndMod: 2,
        loanAccLowModCom: 3,
        percentageComOfColor: 4,
        accOfAltID: 1,
        costWireTranfers: 4               
        
    }
  },
  {
    bankName: 'peoplesunited',
    bankRatings: {
       numBranchLocations: 2,
        branchLocalDistributions: 1,
        onlineBanking: 1,
        outsideATMFee: 1,
        checkingAccountFees: 3,
        savingAccountFees: 4,
        overdraftPractices: 2,
        overdraftThresholdsLimits: 3,
        creditCards: 5,
        creditCardsFees: 1,
        loanOrigMarketshare: 1,
        loanAccNYstate: 1,
        loanAccLatino: 1,
        loanAccBlack: 1,
        loanAccLowMod: 1,
        percentageLowAndMod: 1,
        loanAccLowModCom: 1,
        percentageComOfColor: 1,
        accOfAltID: 2,
        costWireTranfers: 4               
        
    }
  }                        
  ];

  $scope.reset = function() {
    for (var weight in $scope.weights) {
      if ($scope.weights[weight] === "" || isNaN($scope.weights[weight]) || $scope.weights[weight] < 0) {
        $scope.weights[weight] = 0;
      }
    }
  };

  $scope.finalScore = function() {
    $scope.bankOfAmerica = [];
    $scope.HSBC = [];
    $scope.santander = [];
    $scope.JP_morgan_chase = [];
    $scope.citibank = [];
    $scope.capitalone = [];
    $scope.keybank = [];
    $scope.mAndt = [];
    $scope.tdbank = [];
    $scope.firstniagara = [];
    $scope.communitybank = [];
    $scope.NYcommunityAndCommercial = [];
    $scope.nbt = [];
    $scope.citizensbank = [];
    $scope.trustCO = [];
    $scope.astoriabank = [];
    $scope.wellsfargo = [];
    $scope.applebank = []; 
    $scope.peoplesunited = [];  

    for (var x = 0; x < bankInfo.length; x++) {
      $scope.score = 0;
      for (var score in bankInfo[x].bankRatings) {
        $scope.current = bankInfo[x].bankName;
        $scope.score = parseInt(bankInfo[x].bankRatings[score] / 5 * $scope.weights[score]);
        $scope[$scope.current].push($scope.score);
      }
      console.log($scope.current + ": " + $scope[$scope.current]);
    }

    $scope.oneScore = function(bank) {
      var total = 0;
      for (var y = 0; y < bank.length; y++) {
        total += parseInt(bank[y]);
      }
      return total;
    };

    $scope.allScores = {
      bankOfAmerica: $scope.oneScore($scope.bankOfAmerica),
      HSBC: $scope.oneScore($scope.HSBC),
      santander: $scope.oneScore($scope.santander),
      JP_morgan_chase: $scope.oneScore($scope.JP_morgan_chase),
      citibank: $scope.oneScore($scope.citibank),
      keybank: $scope.oneScore($scope.keybank),
      mAndt: $scope.oneScore($scope.mAndt),
      tdbank: $scope.oneScore($scope.tdbank),
      firstniagara: $scope.oneScore($scope.firstniagara),
      communitybank: $scope.oneScore($scope.communitybank),
      NYcommunityAndCommercial: $scope.oneScore($scope.NYcommunityAndCommercial),
      nbt: $scope.oneScore($scope.nbt),
      citizensbank: $scope.oneScore($scope.citizensbank),
      trustCO: $scope.oneScore($scope.trustCO),
      astoriabank: $scope.oneScore($scope.astoriabank),
      wellsfargo: $scope.oneScore($scope.wellsfargo),
      applebank: $scope.oneScore($scope.applebank),
      peoplesunited: $scope.oneScore($scope.peoplesunited)
        
    };
    return $scope.score;
  };

});
