test('null', () => {
    const n = null;
    expect(n).toBeNull(); // true
    expect(n).toBeDefined(); // true
    expect(n).not.toBeUndefined(); // true 
    expect(n).not.toBeTruthy(); // true
    expect(n).toBeFalsy(); // true
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull(); // true
    expect(z).toBeDefined(); // true
    expect(z).not.toBeUndefined(); // true
    expect(z).not.toBeTruthy(); // true
    expect(z).toBeFalsy(); // true
  });