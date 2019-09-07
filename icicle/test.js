class Expect {
  constructor(subject) {
    this.subject = subject;
  }

  toEqual(matcher) {
    if (matcher instanceof Array) {
      return JSON.stringify(matcher) === JSON.stringify(this.subject)
    } else {
      return matcher === this.subject;
    }
  }

  notToEqual(matcher) {
    return !this.toEqual(matcher);
  }
  toContain(element) {
    return this.subject.includes(element);
  }
  notToContain(element) {
    return !this.toContain(element);
  }
  toRaiseError(expectedError) {
    try {
      this.subject();
    } catch (errorMessage) {
      if (!expectedError) {
        return true;
      } else if (errorMessage === expectedError) {
        return true;
      }
    }
    return false;
  }
  notToRaiseError(expectedError) {
    return !this.toRaiseError(expectedError);
  }
}

function expect(subject) {
  return new Expect(subject);
}

function formatResult(boolean) {
  return boolean ? "Pass" : "Fail";
}

function describe(description, func) {
  return description + "</br>" + func();
}

function it(description, func) {
  return description + "</br>" + formatResult(func());
}

function double(func, message, response) {
  return (this.message = response);
}

function Mock(mockName, mockValue) {
  return function mocker() {
    mockName = 'hello';
    return mockValue;

  };
}