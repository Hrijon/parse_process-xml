#!/usr/bin/perl -w 
use strict;
use XML::DOM;
my $doc;

my $xml_file= shift;

my $parser = new XML::DOM::Parser;

die "Unable to parse XML document\n" 
    unless $doc = $parser->parsefile($xml_file); 

foreach my $elem ($doc->getElementsByTagName("title"))
{ 
	foreach my $child ($elem->getChildNodes)
	{ 
		if (($child->getNodeType == TEXT_NODE)&&($child->getNodeValue ~~ /Internet+/))
        {
			print $child->getNodeValue;
		}
	}
	print"\n";  
} 
