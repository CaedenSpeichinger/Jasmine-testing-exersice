
it('should calculate the monthly rate correctly', function () {
  const inputs = {amount: 20000, years: 5, rate: 6.5};
    expect(calculateMonthlyPayment(inputs)).toEqual('181.63');
});


it("should return a result with 2 decimal places", function() {
  const inputs = {amount: 32000, years: 5, rate: 3.5};
  expect(calculateMonthlyPayment(inputs)).toEqual('545.75')
});

/// etc
