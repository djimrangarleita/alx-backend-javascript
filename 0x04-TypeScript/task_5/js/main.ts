interface MajorCredits {
  credits: number,
  brand: 'major',
}

interface MinorCredits {
  credits: number,
  brand: 'minor',
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  return {
    credits: subject1 + subject2,
    brand: 'major',
  };
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return {
    credits: subject1 + subject2,
    brand: 'minor',
  };
}
