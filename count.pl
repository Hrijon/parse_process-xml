#!/usr/bin/perl -w 
use strict;
use XML::DOM;
use XML::XPath;

my $doc;
my %counts;
my $xml_file= shift;

my $parser = new XML::DOM::Parser;

die "Unable to parse XML document\n" 
    unless $doc = $parser->parsefile($xml_file); 

# my @nodes = $xp->findnodes('/perl_mongers/group');

foreach my $elem ($doc->getElementsByTagName("title"))
{ 
	foreach my $child ($elem->getChildNodes)
	{ 
		if (($child->getNodeType == TEXT_NODE)&&($child->getNodeValue ~~ /Internet+/))
		{
			print $child->getNodeValue;
			$counts{$elem}++; 	
		}
	}
} 
print"\n";

my $total;
map { $total += $counts{$_}; "$_ : $counts{$_}\n" } keys %counts;
 
print "\nTotal: $total\n";
