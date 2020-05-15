#!/usr/bin/perl -w
use strict;
use XML::DOM; 

my $xml_file= shift; 

my $parser = new XML::DOM::Parser;
my $dom_obj;

die "Unable to parse XML document\n" 
    unless $dom_obj = $parser->parsefile($xml_file);

print $dom_obj->toString; 

