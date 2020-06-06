// Initially we will be creating a function named as palindrome & we pass an argument str which is string.
function palindrome(str) 
{
  // Now we take the original value & convert all the characters into lower case.
  // The '\W' is generally used for accessing all alphanumeric characters.
  // Here we are avoiding all the non-alphanumeric characters by replace property.
  var original = str.toLowerCase().replace(/[\W_]+/g,"");
  // Now we are telling the function to read from backside.
  var backwards = original.split("").reverse().join("");
  // Now we have to check whether the original & backward text is similar or not.
  // 'If' condition checks if they are equal & then returns the true condition. 
  if (original == backwards) 
  {
	return true;
  } 
  // 'Else' condition is executed if they are not equal & then returns false condition.
  else 
  {
	return false;
  }
}
// The console.log is used as a print statement.
console.log(palindrome("race Car"));

// Output :- true
