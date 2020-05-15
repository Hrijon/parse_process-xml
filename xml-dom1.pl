#!/usr/bin/perl -w
use strict;
use XML::DOM;

my $parser = new XML::DOM::Parser;
my $dom_obj;

die "Unable to parse XML document\n" 
    unless $dom_obj = $parser->parsefile("course.xml");

my @nodes = $dom_obj->getElementsByTagName("unit");

foreach my $elem (@nodes)
{
    if ($elem->getNodeType == ELEMENT_NODE)
	{
        print $elem->getTagName, "\n";
    }
    # Do other things with $elem 
    # ...
}

