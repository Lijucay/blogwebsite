---
layout: ../../layouts/MarkdownPostLayout.astro

title: 'Cryptology and Privacy'
pubDate: 2024-04-16
description: "Discover the basics of cryptology: how data can be encrypted and decrypted using simple methods, the difference between symmetric and asymmetric encryption, and why privacy matters—especially under GDPR regulations in the EU."
image:
  url: '/assets/blog-covers/bits_and_beyond_5.webp'
  alt: 'A phone left to a macbook with a vpn opened'
author: 'Lijucay'
tags: ["basics", "privacy", "cryptology", "learning in public"]
in: "Bits & Beyond"
---
Last time, we talked about data structures. Before we talk about how data is coded and how it can be transmitted, let's take a look at cryptology and privacy.

## Cryptology

Let's start with the topic of cryptology. There a many possibilities on how to encrypt and decrypt data. Encrypting data is important for if you store sensitive user data. It is used for example in messenger services, in password manager or what not. We will, in this episode, dive into encryption and how it works, by using simple cryptological methods.

### Transposition method

The transposition is one of the two basic cryptological classes. The characters of the text are resorted, but every character remains the same.

Let's take a look at an example:

Word: "HELLO"  
Encrypted: "LHLOE"

### Substitution method

The substitution method is the second basic cryptological class. Characters or even character groups of the text are replaced (substituted) by other characters.

#### Caesar cipher

An example of a substitution method is the so-called Caesar cipher. It's a mono-alphabetic encryption. Here, the characters are moved by a certain number. For example, by 1.

For the word "HELLO", it would be "IFMMP". The letter H is moved by one to the letter I (since ... G **H I** ...).

##### Decrypting a Caesar cipher

There are two possibilities to decipher the Caesar cipher.

1. Brute force

   You can decipher the text by going through all 25 possible keys

2. Frequency analysis

   You can decipher the text by checking the relative frequency of the language. The letter that exists most in the secret text probably is the most used letter in the language. For German, this would be the letter "E", which has a relative frequency of 17.4%.


#### Vigenère cipher

The Vigenère cipher is a poly-alphabetic substitution. Here, you have a keyword / code word. You move the letter of the text by the place of the keyword-letter. If the keyword ends, but the text is not finished, you simply start again with the keyword.

Important: Counting starts at 0, so "a" is 0!

Let's take a look at the example:

Word:  
I AM A SECURE SENTENCE  
Keyword:  
SECURE

```java
A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

I  A  M  A  S  E  C  U  R  E  S  E  N  T  E  N  C  E
8  0  12 0  18 4  2  20 17 4  18 4  13 19 4  13 2  4
S  E  C  U  R  E  S  E  C  U  R  E  S  E  C  U  R  E
18 4  2  20 17 4  18 4  2  20 17 4  18 4  2  20 17 4
A  E  O  U  J  I  U  Y  T  Y  J  I  F  X  G  H  T  I
0  4  14 20 9  8  20 24 19 24 9  8  5  23 6  7  19 8
```

Why is it 0, when 18 + 8 = 26 for example?  
Since the alphabet starts at 0 and ends at 25, we restart at 0, every time the result is greater than 25. The 26th position is thus "a", so 0.

This encryption is not so easy to decipher without the code word, but it still can be done by a frequency analysis. Also, it is important to choose a secure code word.

### Symmetric and asymmetric encryption

A symmetric encryption means, that the encrypted data is encrypted and decrypted with the same key. Both sides need to know the key for this to work. This also means, it is only secure as long as no other knows the key. It is used for example for Word documents, that are encrypted by a password.

Asymmetric encryption means, that there are two different keys. A public key, that the sender can use to encrypt the data and a secret key that the receiver can use to decrypt the data. It is often used in digital signatures.

### Digital signatures and certificates

Signatures are used to certificated, that the receiver of a message is the correct one (authentication) and that the message is not changed (integrity). Digital signatures consist of an asymmetric key-pair, a public and a private key. The digital signature is sent together with the message. The receiver uses the public key of the sender on the digital signature and receives a result, that is compared to the message. Only with the fitting public key, the comparison is successful, and the receiver can be sure, it got the message from the correct sender.

Certificates are used to ensure, that the public key really does belong to the stated owner. The state owner have it confirmed by the certificate, that his key is real. The certification authority issues a digital signature on the key using its private key and everyone can check, if the public key really belongs to the stated person.

## Privacy

Privacy is important for making sure that sensitive data like our address is not available to anyone.

### Definitions

**Personal data** describes data, that contains information that is related to an identified or identifiable natural person.

**Data collection** means the action of collecting (personal) data.

**Data processing** means the operation of the handling of (personal) data, with or without help of automatic procedures.

**Data usage** means any usage of (personal) data, that is not data processing.

**Data protection law** is a legal area, that rules the collection, processing, usage, storage, deletion and transmission of (personal) data. It protects the laws and freedom of affected people in terms of their own data.

**Data economy** rules, that only that data is allowed to be collected, that is actually used for a concrete purpose.

**Data avoidance** means, that data privacy-friendly technologies should be used, to avoid data collection.

### GDPR (General Data Protection Regulations)

To protect a person's data and to regulate the collection, processing, usage, storage, deletion and transmission of personal data, the GDPR exists for people in the EU. It contains, but is not limited to, the following rights for individuals:

* The **right to information** is giving any individual the right to get information about its collected data from its data processor.

* The **right to deletion** explains, that any affected person has the right to request the deletion of its own data, if they are no longer used or if the data processing is based on a consent, that has been revoked.

* The **right to data portability** is giving the affected person the right, under set circumstances, to get its own data in a structured, machine-readable format.

* Also, a company can only use your data for the purposes they stated, when you gave them your consent. That also means, that if they would like to use your data for other purposes, you have to be asked again.


Now, that's it. You should be able now to explain, what cryptology is and how your privacy in the EU is protected by the GDPR.