#!/usr/bin/perl -w 
use strict;
use XML::DOM;
use XML::XPath;

my $course;
my %counts;
my $xml_file= shift;

my $parser = new XML::DOM::Parser;

die "Unable to parse XML document\n" 
    unless $course = $parser->parsefile($xml_file); 

# my @nodes = $xp->findnodes('/perl_mongers/group');
my @unit = $course->getElementsByTagName("unit");
my @lecturer = $course->getElementsByTagName("lecturer");
my @title = $course->getElementsByTagName("title");

# print $title->getValue;

foreach my $elem (@lecturer)
{
    foreach my $child ($elem->getChildNodes)
	{ 
        if($child->getNodeValue)
        {
            print $child->getNodeValue; 
        }
    }
}

foreach my $elem (@title)
{ 
	foreach my $child ($elem->getChildNodes)
	{ 
		if (($child->getNodeType == TEXT_NODE)&&($child->getNodeValue ~~ /Internet+/))
		{
			print $child->getNodeValue;
            print "\n";
            print "hello";
            # my $data = 
		}
	}
} 
print"\n";
