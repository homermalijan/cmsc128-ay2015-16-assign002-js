//Homer Malijan	
//2013-09022
//AB-2L
//Programming Assignment 2: Simple Bioinformatics Library
//==========================================================================================================================//
	/*Given two strings str1 and str2 of same length (length must never be 0 or
	negative!), the Hamming Distance of those two strings are the number of inversions per
	character need to transform str1 to str2 or vise-versa. Simply put, the Hamming Distance
	of two strings is the number of characters that differ in ith position from position 1 to
	strlen(str1). (Recario, 2016)*/
//==========================================================================================================================//
function getHammingDistance(str1,str2){ 										//compute inversions per position
	var counter = 0 ;															//counter
	if(str1.length <= 0 || str2.length <= 0) return 'Error! Empty String';		//empty string
	else {
		if(str1.length != str2. length) return 'Error! Strings are not equal.'	//string is not empty but not equal
		else {
			for(i = 0 ; i < str1.length ; i++){
				if(str1[i] != str2[i]) counter++;								//count inversion
			}
		}
	}//close else
	return counter;																//return inversions
}//close get hamming getHammingDistance

//==========================================================================================================================//
	/*Given a string original and pattern, we will count the number of occurrence
	of pattern in original. (Recario, 2016)*/
//==========================================================================================================================//
function countSubstrPattern(original,pattern){
	var counter = 0 ;															//match counter
	var counter2 = 0;															//counter for checking match
	if(original.length <= 0) return 'Error! Empty String';						//empty string
	else {
		if(original.length < pattern.length) return 0;							//sure zero, skip whole process
		else {
			for(i = 0 ; i < original.length ; i++){								//check each index of original string
				if(i+pattern.length > original.length) break;					
				for(j = i ,counter2 = 0, k = 0; k < pattern.length ; j++, k++){	//check match starting from index from pattern
					if(original[j] == pattern[k]) counter2++;					//update counter2 if match
					else break;
				}
				if(counter2 == pattern.length) counter++;						//all matched, update no, of matches
			}
		}
	}//close else
	return counter;																//return counter
}//close countSubStrPattern

//==========================================================================================================================//
	/*Given an alphabet string where all letters are assumed to be unique, this
	function returns true if the string str is a valid string based on the letters of alphabet. (Recario, 2016)*/
//==========================================================================================================================//
function isValidString(str, alphabet){
	var counter = 0;															//checker
	for(i =  0 ; i < alphabet.length ; i++){
		for(j = 0, counter = 0; j < str.length ; j++){
			if(alphabet[i] == str[j]) counter++;								//if alpha[i] is found, update counter
		}
		if(counter == 0) return false;											//no match of alpha, flase
	}//close outer for 
	return true;																//else true
}//close isVAlidString

//==========================================================================================================================//
	/*Given a genome str of some length q (where q>0), it returns the number of
	Gs minus the number of Cs in the first n nucleotides (q>=n). The value can be zero,
	negative or positive. The first position is one (1) not zero(0) as we typically associate with
	string implementations. (Recario, 2016)*/
//==========================================================================================================================//
function getSkew(str, n){
	var gCount = 0;
	var cCount = 0;

	if(str.length <= 0) return 'Error! Invalid String';							//invalid string
	if(n <= 0 || n > str.length) return 'Invalid Position';						//position should only br 1- str.length

	for(i = 1 ; i <= n ; i++){
		if(str[i-1] == 'G') gCount++;											//count g
		else if(str[i-1] == 'C') cCount++;										//count c
	}
	return gCount-cCount;														//return difference of g and c
}//close getSkew

//==========================================================================================================================//
	/*Given a genome str of some length q (where q>0), it returns the maximum
	value of the number of Gs minus the number of Cs in the first n nucleotides (q>=n). The
	value can be zero, negative or positive. The first position is one (1) not zero(0) as we
	typically associate with string implementations. (Recario, 2016)*/
//==========================================================================================================================//
function getMaxSkew(str, n){
	var max = 0;																//temp variable for max
	var i = 1;																	//iterator

	if(str.length <= 0) return 'Error! Invalid String';
	if(n <= 0 || n > str.length) return 'Invalid Position';

	do{
		var temp = getSkew(str,i);												//repeatedly use getSkew
		if(max < temp) max = temp;												//update max if necessary
		i++;
	}while(i!=n+1);	
	return max;																	//return max
}//close getMaxSkew

//==========================================================================================================================//
	/*Given a genome str of some length q (where q>0), it returns the minimum
	value of the number of Gs minus the number of Cs in the first n nucleotides (q>=n). The
	value can be zero, negative or positive. The first position is one (1) not zero(0) as we
	typically associate with string implementations. (Recario, 2016)*/
//==========================================================================================================================//
function getMinSkew(str, n){
	if(str.length <= 0) return 'Error! Invalid String';							//check validity first
	if(n <= 0 || n > str.length) return 'Invalid Position';
	
	var min = getSkew(str,1);													//set min to skew of 1
	var i = 2;																	//start copring at position 2
	
	while(i!=n+1){
		var temp = getSkew(str,i);												//continuous getSkew until n is reached
		if(min > temp) min = temp;												//update min if necessary
		i++;
	};	
	return min;
}

